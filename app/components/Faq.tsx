"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`border-2 rounded-2xl transition-all duration-300 ${
              isOpen
                ? "border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.05)]"
                : "border-gray-200"
            }`}
          >
            {/* QUESTION */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <span
                className={`text-lg font-medium ${
                  isOpen ? "text-[rgb(151,91,236)]" : "text-black"
                }`}
              >
                {faq.question}
              </span>

              {isOpen ? (
                <Minus className="shrink-0" />
              ) : (
                <Plus className="shrink-0" />
              )}
            </button>

            {/* ANSWER */}
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6 pb-6 text-gray-700 text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
