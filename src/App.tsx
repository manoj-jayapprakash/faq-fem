import { FAQ } from './FAQ';

function App() {
  return (
    <main className="h-screen bg-[url('/mobile.svg')] bg-contain bg-no-repeat bg-light-pink lg:bg-[url('desktop.svg')] flex flex-col justify-between text-dark-purple font-work">
      <FAQ />
      <footer className="text-center text-sm">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://github.com/manoj-jayapprakash">Manoj Jayapprakash</a>.
      </footer>
    </main>
  );
}

export default App;
