// app/documentation/page.tsx



export default function DocumentationPage() {
  return (
    <div className="relative font-sans">

      <div className="relative z-10 flex items-center justify-center p-4 pt-40">
        <div id="content-container" className="w-full max-w-8xl mx-auto p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 pb-4 text-black text-center border-b border-gray-300">Abstract</h1>
          
          
        </div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center p-4">
        <div id="content-container" className="w-full max-w-8xl mx-auto p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 pb-4 text-black text-center border-b border-gray-300">Hardware</h1>
          
          
        </div>
      </div>
      
      {/* Our Team Section */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div id="content-container" className="w-full max-w-8xl mx-auto p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 pb-4 text-black text-center border-b border-gray-300">Input - Output</h1>
          
        </div>
      </div>
      
    </div>
  );
}