import ShowInvoice from "./components/ShowInvoice";

function App() {
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow" style={{padding:"20px"}}>
        <ShowInvoice />
      </main>
    </>
  );
}

export default App;
