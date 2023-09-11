import Image from 'next/image'

export default function Home() {
  
  function generateLightColor(): string {
    const min = 0;  // Minimum value for each RGB component
    const max = 300;  // Maximum value for each RGB component
  
    let r = Math.floor(Math.random() * (max - min + 1)) + min;
    let g = Math.floor(Math.random() * (max - min + 1)) + min;
    let b = Math.floor(Math.random() * (max - min + 1)) + min;

    r = Math.floor((r + 255) / 2);
    g = Math.floor((g + 255) / 2);
    b = Math.floor((b + 255) / 2);
  
    return `rgb(${r},${g},${b})`;
  }

  const colors: string[] = Array.from({ length: 30 }, generateLightColor);




  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="move-div-blue">John Marren</div>
      <div className="absolute blue-clip-path top-0 left-0 bg-blue-500 w-[2000px] h-[100px] rotate-[45deg] move-div-blue"></div>
      <div className="absolute red-clip-path top-0 right-0 bg-red-500 w-[2000px] h-[100px] rotate-[45deg] move-div-red"></div>
      <div className="triangle"></div>
      <div className="relative w-screen h-screen top-[30vh]">
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className="triangle rotate-triangle"
          style={{
            transform: `translate(-50%, -50%) rotate(${index * Math.PI * 10}deg)`,
            borderBottomColor: colors[index % colors.length]
          }}
        ></div>
      ))}
    </div>
    </main>
  )
}
