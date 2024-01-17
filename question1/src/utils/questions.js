const questions = [
  {
    id: 1,
    level: 'easy',
    category: 'Mathematics',
    question: 'What is 2 + 2?',
    answers: [
      {
        text: '4',
        isCorrect: true,
      },
      {
        text: '3',
        isCorrect: false,
      },
      {
        text: '5',
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    level: 'medium',
    category: 'Mathematics',
    question: 'What is the square root of 64?',
    answers: [
      {
        text: '6',
        isCorrect: false,
      },
      {
        text: '8',
        isCorrect: true,
      },
      {
        text: '10',
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    level: 'hard',
    category: 'Mathematics',
    question: 'What is the value of pi (π) to two decimal places?',
    answers: [
      {
        text: '3.14',
        isCorrect: true,
      },
      {
        text: '3.12',
        isCorrect: false,
      },
      {
        text: '3.16',
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    level: 'easy',
    category: 'Mathematics',
    question: 'What is 5 x 9?',
    answers: [
      {
        text: '45',
        isCorrect: true,
      },
      {
        text: '36',
        isCorrect: false,
      },
      {
        text: '50',
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    level: 'medium',
    category: 'Mathematics',
    question: 'What is the formula for calculating the area of a circle?',
    answers: [
      {
        text: 'pi x radius^2',
        isCorrect: true,
      },
      {
        text: 'pi x diameter',
        isCorrect: false,
      },
      {
        text: '2 x pi x radius',
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    level: 'hard',
    category: 'Mathematics',
    question: 'What is the Pythagorean Theorem?',
    answers: [
      {
        text: 'a^2 + b^2 = c^2',
        isCorrect: true,
      },
      {
        text: 'a + b + c = pi',
        isCorrect: false,
      },
      {
        text: 'a x b = c^2',
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    level: 'easy',
    category: 'Mathematics',
    question: 'What is 10% of 200?',
    answers: [
      {
        text: '20',
        isCorrect: true,
      },
      {
        text: '10',
        isCorrect: false,
      },
      {
        text: '5',
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    level: 'medium',
    category: 'Mathematics',
    question: 'What is the formula for the volume of a rectangular prism?',
    answers: [
      {
        text: 'length x width x height',
        isCorrect: true,
      },
      {
        text: '2 x (length x width) + 2 x (width x height) + 2 x (length x height)',
        isCorrect: false,
      },
      {
        text: 'pi x radius^2 x height',
        isCorrect: false,
      },
    ],
  },
  {
    id: 9,
    level: 'hard',
    category: 'Mathematics',
    question: 'What is the formula for the derivative of x^2?',
    answers: [
      {
        text: '2x',
        isCorrect: true,
      },
      {
        text: 'x^2',
        isCorrect: false,
      },
      {
        text: '1/x',
        isCorrect: false,
      },
    ],
  },
  {
    id: 10,
    level: 'easy',
    category: 'Mathematics',
    question: 'What is the value of pi (π) to two decimal places?',
    answers: [
      {
        text: '3.14',
        isCorrect: true,
      },
      {
        text: '2.71',
        isCorrect: false,
      },
      {
        text: '1.41',
        isCorrect: false,
      },
    ],
  },
  {
    id: 11,
    level: 'medium',
    category: 'Mathematics',
    question: 'What is the formula to find the area of a triangle?',
    answers: [
      {
        text: 'A = (1/2)bh',
        isCorrect: true,
      },
      {
        text: 'A = πr²',
        isCorrect: false,
      },
      {
        text: 'A = lw',
        isCorrect: false,
      },
    ],
  },
  {
    id: 12,
    level: 'hard',
    category: 'Mathematics',
    question: 'What is the quadratic formula?',
    answers: [
      {
        text: 'x = (-b ± √(b² - 4ac)) / 2a',
        isCorrect: true,
      },
      {
        text: 'x = (-b ∓ √(b² + 4ac)) / 2a',
        isCorrect: false,
      },
      {
        text: 'x = (-b ± √(a² - 4bc)) / 2c',
        isCorrect: false,
      },
    ],
  },
  {
    id: 13,
    level: 'easy',
    category: 'Mathematics',
    question: 'What is the square root of 81?',
    answers: [
      {
        text: '9',
        isCorrect: true,
      },
      {
        text: '8',
        isCorrect: false,
      },
      {
        text: '10',
        isCorrect: false,
      },
    ],
  },
  {
    id: 14,
    level: 'medium',
    category: 'Mathematics',
    question: 'What is the formula to find the volume of a sphere?',
    answers: [
      {
        text: 'V = (4/3)πr³',
        isCorrect: true,
      },
      {
        text: 'V = (1/3)πr²h',
        isCorrect: false,
      },
      {
        text: 'V = πr²h',
        isCorrect: false,
      },
    ],
  },
  {
    id: 15,
    level: 'hard',
    category: 'Mathematics',
    question: 'What is the Pythagorean Theorem?',
    answers: [
      {
        text: 'a² + b² = c²',
        isCorrect: true,
      },
      {
        text: 'a² - b² = c²',
        isCorrect: false,
      },
      {
        text: 'a + b + c = 180°',
        isCorrect: false,
      },
    ],
  },
  {
    id: 16,
    level: 'easy',
    category: 'History',
    question: 'In what year did World War II end?',
    answers: [
      {
        text: '1945',
        isCorrect: true,
      },
      {
        text: '1939',
        isCorrect: false,
      },
      {
        text: '1950',
        isCorrect: false,
      },
    ],
  },
  {
    id: 17,
    level: 'medium',
    category: 'History',
    question: 'Who was the first president of the United States?',
    answers: [
      {
        text: 'George Washington',
        isCorrect: true,
      },
      {
        text: 'Thomas Jefferson',
        isCorrect: false,
      },
      {
        text: 'Abraham Lincoln',
        isCorrect: false,
      },
    ],
  },
  {
    id: 18,
    level: 'hard',
    category: 'History',
    question: 'In what year did the French Revolution begin?',
    answers: [
      {
        text: '1789',
        isCorrect: true,
      },
      {
        text: '1765',
        isCorrect: false,
      },
      {
        text: '1804',
        isCorrect: false,
      },
    ],
  },
  {
    id: 19,
    level: 'easy',
    category: 'History',
    question: 'What was the category of the ancient civilization that built the pyramids?',
    answers: [
      {
        text: 'Egyptians',
        isCorrect: true,
      },
      {
        text: 'Greeks',
        isCorrect: false,
      },
      {
        text: 'Romans',
        isCorrect: false,
      },
    ],
  },
  {
    id: 20,
    level: 'medium',
    category: 'History',
    question: 'What year did the United States gain independence from Great Britain?',
    answers: [
      {
        text: '1776',
        isCorrect: true,
      },
      {
        text: '1789',
        isCorrect: false,
      },
      {
        text: '1803',
        isCorrect: false,
      },
    ],
  },
  {
    id: 21,
    level: 'hard',
    category: 'History',
    question: 'Who was the first female prime minister of the United Kingdom?',
    answers: [
      {
        text: 'Margaret Thatcher',
        isCorrect: true,
      },
      {
        text: 'Angela Merkel',
        isCorrect: false,
      },
      {
        text: 'Theresa May',
        isCorrect: false,
      },
    ],
  },
  {
    id: 22,
    level: 'easy',
    category: 'History',
    question: 'Who was the first president of the United States?',
    answers: [
      {
        text: 'George Washington',
        isCorrect: true,
      },
      {
        text: 'Thomas Jefferson',
        isCorrect: false,
      },
      {
        text: 'John Adams',
        isCorrect: false,
      },
    ],
  },
  {
    id: 23,
    level: 'medium',
    category: 'History',
    question: 'What event marked the beginning of World War II?',
    answers: [
      {
        text: 'The invasion of Poland',
        isCorrect: true,
      },
      {
        text: 'The bombing of Pearl Harbor',
        isCorrect: false,
      },
      {
        text: 'The signing of the Treaty of Versailles',
        isCorrect: false,
      },
    ],
  },
  {
    id: 24,
    level: 'hard',
    category: 'History',
    question: 'Who was the first African American to serve as president of South Africa?',
    answers: [
      {
        text: 'Nelson Mandela',
        isCorrect: true,
      },
      {
        text: 'Jacob Zuma',
        isCorrect: false,
      },
      {
        text: 'Thabo Mbeki',
        isCorrect: false,
      },
    ],
  },
  {
    id: 25,
    level: 'easy',
    category: 'History',
    question: 'Who was the founder of the Mongol Empire?',
    answers: [
      {
        text: 'Genghis Khan',
        isCorrect: true,
      },
      {
        text: 'Attila the Hun',
        isCorrect: false,
      },
      {
        text: 'Alexander the Great',
        isCorrect: false,
      },
    ],
  },
  {
    id: 26,
    level: 'medium',
    category: 'History',
    question: 'What event marked the beginning of the French Revolution?',
    answers: [
      {
        text: 'The Storming of the Bastille',
        isCorrect: true,
      },
      {
        text: 'The Reign of Terror',
        isCorrect: false,
      },
      {
        text: 'The execution of Louis XVI',
        isCorrect: false,
      },
    ],
  },
  {
    id: 27,
    level: 'hard',
    category: 'History',
    question:
      'What was the category of the Roman general who famously crossed the Alps with elephants?',
    answers: [
      {
        text: 'Hannibal Barca',
        isCorrect: true,
      },
      {
        text: 'Julius Caesar',
        isCorrect: false,
      },
      {
        text: 'Mark Antony',
        isCorrect: false,
      },
    ],
  },
  {
    id: 28,
    level: 'easy',
    category: 'History',
    question: 'What was the category of the treaty that ended World War I?',
    answers: [
      {
        text: 'The Treaty of Versailles',
        isCorrect: true,
      },
      {
        text: 'The Treaty of Paris',
        isCorrect: false,
      },
      {
        text: 'The Treaty of Brest-Litovsk',
        isCorrect: false,
      },
    ],
  },
  {
    id: 29,
    level: 'medium',
    category: 'History',
    question: 'Who was the leader of the Soviet Union during World War II?',
    answers: [
      {
        text: 'Joseph Stalin',
        isCorrect: true,
      },
      {
        text: 'Vladimir Lenin',
        isCorrect: false,
      },
      {
        text: 'Leon Trotsky',
        isCorrect: false,
      },
    ],
  },
  {
    id: 30,
    level: 'hard',
    category: 'History',
    question:
      "What was the category of the battle that ended Napoleon's reign as Emperor of France?",
    answers: [
      {
        text: 'The Battle of Waterloo',
        isCorrect: true,
      },
      {
        text: 'The Battle of Austerlitz',
        isCorrect: false,
      },
      {
        text: 'The Battle of Borodino',
        isCorrect: false,
      },
    ],
  },
];
export default questions;
