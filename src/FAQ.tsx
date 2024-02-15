// import { FAQS } from './data';
// import star from './assets/images/icon-star.svg';
// import plus from './assets/images/icon-plus.svg';
// import minus from './assets/images/icon-minus.svg';
// import { useState } from 'react';

// export const FAQ = () => {
//   const [toggleFaq, setToggleFaq] = useState<number[]>([]);

//   const handleFaqToggle = (id: number) => {
//     if (toggleFaq.includes(id)) {
//       setToggleFaq((prev) => prev.filter((faq) => faq !== id));
//     } else setToggleFaq((prev) => [...prev, id]);
//   };

//   return (
//     <section className="flex-1 grow grid place-items-center p-6">
//       <div className=" bg-white p-4 rounded-lg grid gap-4 lg:w-[38rem]">
//         <h1 className="flex gap-4 items-center font-bold text-3xl px-4">
//           <span>
//             <img src={star} alt="star icon" width={24} height={24} />
//           </span>
//           FAQs
//         </h1>
//         <div data-testid="faqs" className="px-2 grid divide-y">
//           {FAQS.map((faq) => (
//             <div
//               key={faq.id}
//               className="py-3 cursor-pointer hover:text-pink"
//               data-testid="faq"
//               onClick={() => handleFaqToggle(faq.id)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   handleFaqToggle(faq.id);
//                 }
//               }}
//               tabIndex={faq.id}
//             >
//               <div className="flex justify-between items-center font-semibold">
//                 <h2 className="w-3/4 ">{faq.question}</h2>
//                 <img
//                   src={toggleFaq.includes(faq.id) ? minus : plus}
//                   alt="plus icon"
//                   width={30}
//                   height={30}
//                 />
//               </div>
//               <p
//                 className={`
//                  ${toggleFaq.includes(faq.id) ? `block` : `hidden`}  text-grayish-purple py-4`}
//               >
//                 {faq.answer}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

//Semantic Approach with details summary
import { FAQS } from './data';
import star from './assets/images/icon-star.svg';
import plus from './assets/images/icon-plus.svg';
import minus from './assets/images/icon-minus.svg';
import { useState } from 'react';

export const FAQ = () => {
  const [toggleFaq, setToggleFaq] = useState<number[]>([]);

  const handleFaqToggle = (id: number) => {
    if (toggleFaq.includes(id)) {
      setToggleFaq((prev) => prev.filter((faq) => faq !== id));
    } else setToggleFaq((prev) => [...prev, id]);
  };

  return (
    <section className="flex-1 grow grid place-items-center p-6">
      <div className=" bg-white p-6 lg:p-10 rounded-lg grid gap-4 lg:w-[38rem]">
        <h1 className="flex gap-4 items-center font-bold text-3xl lg:text-6xl px-4">
          <span>
            <img
              src={star}
              alt="star icon"
              width={24}
              height={24}
              className="lg:w-10 lg:h-10"
            />
          </span>
          FAQs
        </h1>
        <div data-testid="faqs" className="px-2 grid divide-y">
          {FAQS.map((faq) => (
            <details
              key={faq.id}
              className="py-3 cursor-pointer hover:text-pink"
            >
              <summary
                className="flex justify-between items-center font-semibold"
                onClick={() => handleFaqToggle(faq.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleFaqToggle(faq.id);
                  }
                }}
                aria-expanded={toggleFaq.includes(faq.id)}
              >
                <h2 className="w-3/4 lg:w-auto">{faq.question}</h2>
                <span className="faq-icon">
                  <img
                    src={toggleFaq.includes(faq.id) ? minus : plus}
                    alt={
                      toggleFaq.includes(faq.id) ? 'minus icon' : 'plus icon'
                    }
                    width={30}
                    height={30}
                  />
                </span>
              </summary>
              <p
                className={`
                  text-grayish-purple py-4 text-sm lg:text-base`}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
