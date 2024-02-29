import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import MyCard from "./MyCard";

import { useAccount } from "wagmi";
import {
  useAnimationConfig,
  useScaffoldContract,
  useScaffoldContractRead,
  useScaffoldEventHistory,
  useScaffoldEventSubscriber,
} from "~~/hooks/scaffold-eth";

const MARQUEE_PERIOD_IN_SEC = 5;

export const ContractData2 = () => {
  const { address } = useAccount();
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isRightDirection, setIsRightDirection] = useState(false);
  const [marqueeSpeed, setMarqueeSpeed] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);

  const { data: totalCounter } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "totalCounter",
  });

  const { data: currentGreeting, isLoading: isGreetingLoading } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "greeting",
  });

  useScaffoldEventSubscriber({
    contractName: "YourContract",
    eventName: "GreetingChange",
    listener: logs => {
      logs.map(log => {
        const { greetingSetter, value, premium, newGreeting } = log.args;
        console.log("📡 GreetingChange event", greetingSetter, value, premium, newGreeting);
      });
    },
  });

  const {
    data: myGreetingChangeEvents,
    isLoading: isLoadingEvents,
    error: errorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "YourContract",
    eventName: "GreetingChange",
    fromBlock: process.env.NEXT_PUBLIC_DEPLOY_BLOCK ? BigInt(process.env.NEXT_PUBLIC_DEPLOY_BLOCK) : 0n,
    filters: { greetingSetter: address },
    blockData: true,
  });

  console.log("Events:", isLoadingEvents, errorReadingEvents, myGreetingChangeEvents);

  const { data: yourContract } = useScaffoldContract({ contractName: "YourContract" });
  console.log("yourContract: ", yourContract);

  const { showAnimation } = useAnimationConfig(totalCounter);

  const showTransition = transitionEnabled && !!currentGreeting && !isGreetingLoading;

  // const [inputValue, setInputValue] = useState('');
  // const handleInputChange = (event) => {
  //   const value = event.target.value;

  //   if (value.trim() === '') {
  //     // Input is empty, you can handle this case here
  //     console.log('Input is empty');
  //   } else {
  //     // Input is not empty, you can set the value
  //     setInputValue(value);
  //   }
  // };
  const [inputValue, setInputValue] = useState(''); // Initialize with an empty string
  const [isLoaded, setIsLoaded] = useState(false);

  // Use useEffect to load any saved input value from local storage when the component mounts.
  useEffect(() => {
    const savedInputValue = localStorage.getItem('inputValue');
    if (savedInputValue) {
      setInputValue(savedInputValue);
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, []);

  // Update the input value in response to user input.
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Save the new value to local storage.
    localStorage.setItem('inputValue', newValue);
  };

  useEffect(() => {
    if (transitionEnabled && containerRef.current && greetingRef.current) {
      setMarqueeSpeed(
        Math.max(greetingRef.current.clientWidth, containerRef.current.clientWidth) / MARQUEE_PERIOD_IN_SEC,
      );
    }

  }, [transitionEnabled, containerRef, greetingRef, inputValue]);

  const dataArray = [
    { id: 1, title: 'Steward Profile 1', description: 'This is the first card.' },
    { id: 2, title: 'Steward Profile 2', description: 'This is the second card.' },
    { id: 3, title: 'Steward Profile 3', description: 'This is the third card.' },
    { id: 4, title: 'Steward Profile 4', description: 'This is the fourth card.' },
    // Add more data items as needed
  ];
 



  return (
    <div className="flex flex-col justify-center items-center bg-secondary bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw] ">


      <div
        className={`flex flex-col max-w-md bg-base-200 bg-opacity-70 rounded-2xl shadow-lg px-5 py-4 w-full ${
          showAnimation ? "animate-zoom" : ""
        }`}
      >
        <div className="flex justify-between w-full">
          <button
            className="btn btn-circle btn-ghost relative bg-center bg-[url('/assets/switch-button-on.png')] bg-no-repeat"
            onClick={() => {
              setTransitionEnabled(!transitionEnabled);
            }}
          >
            <div
              className={`absolute inset-0 bg-center bg-no-repeat bg-[url('/assets/switch-button-off.png')] transition-opacity ${
                transitionEnabled ? "opacity-0" : "opacity-100"
              }`}
            />
          </button>
          <div className="bg-secondary border border-primary rounded-xl flex">
            <div className="p-2 py-1 border-r border-primary flex items-end">Total count</div>
            <div className="text-4xl text-right min-w-[3rem] px-2 py-1 flex justify-end font-bai-jamjuree">
              {totalCounter?.toString() || "0"}
            </div>
          </div>
        </div>

        <div className="mt-3 border border-primary bg-neutral rounded-3xl text-black  overflow-hidden text-[32px] whitespace-nowrap w-full  tracking-tighter font-bai-jamjuree leading-tight">
          <div className="relative overflow-x-hidden" ref={containerRef}>
            {/* for speed calculating purposes */}
            <div className="absolute -left-[9999rem]" ref={greetingRef}>
              <div className="px-4">{currentGreeting}</div>
            </div>
            {new Array(1).fill("").map((_, i) => {
              const isLineRightDirection = i % 2 ? isRightDirection : !isRightDirection;
              return (
                <Marquee
                  key={i}
                  direction={isLineRightDirection ? "right" : "left"}
                  gradient={false}
                  play={showTransition}
                  speed={marqueeSpeed}
                  className={i % 2 ? "-my-10" : ""}
                >
                  <div className="px-4">{currentGreeting || " "}</div>
                </Marquee>
              );
            })}
          </div>

        </div>

        <div className="mt-3 flex items-end justify-between">
          <button
            className={`btn btn-circle btn-ghost border border-primary hover:border-primary w-12 h-12 p-1 bg-neutral flex items-center ${
              isRightDirection ? "justify-start" : "justify-end"
            }`}
            onClick={() => {
              if (transitionEnabled) {
                setIsRightDirection(!isRightDirection);
              }
            }}
          >
            <div className="border border-primary rounded-full bg-secondary w-2 h-2" />
          </button>
          <div className="w-44 p-0.5 flex items-center bg-neutral border border-primary rounded-full">
            <div
              className="h-1.5 border border-primary rounded-full bg-secondary animate-grow"
              style={{ animationPlayState: showTransition ? "running" : "paused" }}
            />
          </div>
        </div>
      </div>
      <div>
      <br />
      <input
        type="text"
        value={isLoaded ? inputValue : ''} // Only display the value when it's loaded
        onChange={handleInputChange}
      />
    </div>

    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      {dataArray?.map((item) => (
        <MyCard
          key={item.id} // Ensure you provide a unique key for each card
          title={item.title}
          description={item.description}
          imageUrl={`https://placeimg.com/640/480/${item.id}`}
          tags={['Tag environment', 'Tag bees']} // Modify tags as needed
        />
      ))}
    </div>
    
    </div>
  );
};
