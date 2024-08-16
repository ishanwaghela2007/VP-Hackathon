import React, { useState } from 'react';

const FitnessFAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  const faqItems = [
    {
      question: 'How many times a week should I exercise?',
      answer:
        'For most people, it is recommended to exercise at least 3-5 times a week, including both cardio and strength training exercises.',
    },
    {
      question: 'What is the best way to lose belly fat?',
      answer:
        'A combination of healthy eating, regular cardiovascular exercise, and strength training can help reduce belly fat.',
    },
    {
      question: 'How can I stay consistent with my workouts?',
      answer:
        'Setting realistic goals, tracking progress, and finding a workout routine that you enjoy can help you stay consistent.',
    },
    {
      question: 'Do I need to take supplements to gain muscle?',
      answer:
        'Supplements can be helpful but are not necessary. A balanced diet with enough protein, carbs, and fats is essential for muscle growth.',
    },
    {
      question: 'What should I eat before and after a workout?',
      answer:
        'Before a workout, eat a small meal with carbs and protein. After a workout, focus on replenishing your energy with protein and carbs to aid recovery.',
    },
  ];

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8 text-">
          Fitness FAQ
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-700">
                  {item.question}
                </span>
                <span className="text-green-500">
                  {selected === index ? '-' : '+'}
                </span>
              </button>
              {selected === index && (
                <div className="mt-2 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FitnessFAQ;

