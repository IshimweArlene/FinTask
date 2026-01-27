"use client";

import { useState } from "react";
import { Plus, Minus, SearchIcon } from "lucide-react";
import image1 from "@/public/photos/image1.png";
import image2 from "@/public/photos/image2.png";
import image3 from "@/public/photos/image2.png";
import Image from "next/image";

const faqs = [
  {
    question: "Is there a way to try the Team plan features for free?",
    answer:
      "Yes. You can explore all Team features during the free trial period without being charged.",
  },
  {
    question:
      "With a teams account, will we be charged when our trial is up?",
    answer:
      "No. We don't ask for your credit card up front, so you'll only be charged when you decide to continue after your trial ends. If not, your trial will expire automatically, and your account data will be deleted.",
  },
  {
    question:
      "What happens if I hit the spaces, pages or storage space limit?",
    answer:
      "You will be prompted to upgrade your plan or free up space to continue.",
  },
  {
    question:
      "Does Fintask Track have desktop or mobile apps? Are they free?",
    answer:
      "Yes. Fintask Track is available on both desktop and mobile, and they are free to use.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-col items-center text-center py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="border-[rgba(252,79,36,1)] bg-[rgba(252,79,36,0.08)] border-4 w-5 h-5 rounded-full" />
          <h1 className="caveat font-light strike text-[rgba(188,188,188,1)] text-4xl">
            FAQ
          </h1>
        </div>

        <h1 className="text-5xl text-black font-bold mb-6">
          Frequently asked questions
        </h1>

        <p className="text-[20px] text-black font-medium mb-8">
          Have a question? We’re here to help you
        </p>

        {/* SEARCH */}
        <div className="relative w-[237px] h-[53px] border border-black/10 rounded-2xl">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full pl-12 pr-4 outline-none text-black/56 text-[16px] rounded-2xl"
          />
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-black/56" />
        </div>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl mx-auto space-y-4 pb-24">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 border-2 ${
                isOpen
                  ? "border-[rgb(151,91,236)] shadow-[8px_8px_0px_0px_rgba(115,69,179,1)] bg-[rgba(151,91,236,0.05)]"
                  : "border-gray-200"
              }`}
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span
                  className={`text-2xl font-medium ${
                    isOpen
                      ? "text-[rgb(151,91,236)]"
                      : "text-black"
                  }`}
                >
                  {faq.question}
                </span>

                {isOpen ? <Minus /> : <Plus />}
              </button>

              {/* ANSWER */}
              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-6 pb-6 text-black text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center w-[124px] h-14 mx-auto mb-4 ">
        <Image src={image1} alt="image" className="mx-auto rounded-full -mr-4"/>
        <Image src={image2} alt="image" className="mx-auto rounded-full relative z-30"/>
        <Image src={image1} alt="image" className="mx-auto rounded-full -ml-4 relative z-20"/>
      </div>
      <div className="text-center w-[565px] h-[206px] mx-auto">
        <p className="text-black font-medium text-3xl mb-3">Still have an questions?</p>
        <p className="text-black/64 text-xl">If you can't find an answer to your question in our FAQ, you can always contact us. We'll answer to you shortly!</p>
      </div>
    </div>
  );
}
