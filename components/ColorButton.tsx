import {useState, useEffect} from 'react'

function ColorButton() {
  const [color, setColor] = useState('#FFA500');
  const [wordsColor, setWordsColor] = useState('#FFFFFF')
  const [ringColor, setRingColor] = useState('#FFFFFF')

  let style={backgroundColor:`${color}`, color: `${wordsColor}`, transform: 'rotateY(360deg)'}

  function getRandomHexColor(): string {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to convert a single hex value to its decimal equivalent
function hexToDecimal(hex: string): number {
  return parseInt(hex, 16);
}

// Function to calculate the luminance of a color
function getLuminance(r: number, g: number, b: number): number {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

// Function to generate a visible text color based on a background color
function getVisibleTextColor(backgroundColor: string): string {
  // Extract the RGB values from the background color
  const r = hexToDecimal(backgroundColor.substring(1, 3));
  const g = hexToDecimal(backgroundColor.substring(3, 5));
  const b = hexToDecimal(backgroundColor.substring(5, 7));

  // Calculate the luminance of the background color
  const luminance = getLuminance(r, g, b);

  // Return a color that will be visible over the background color
  return luminance > 128 ? "#000000" : "#FFFFFF";
}

function hexToRGB(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

// Function to convert RGB components to a hex color
function RGBToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

// Function to generate a darker shade of a given color
function getDarkerShade(color: string, amount: number): string {
  let [r, g, b] = hexToRGB(color);

  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);

  return RGBToHex(r, g, b);
}

useEffect(() => {
  console.log('ringColor: ', ringColor)
  console.log(document.getElementById('button'))
},[ringColor])



useEffect(() => {
  setWordsColor(getVisibleTextColor(color));
  setRingColor(`ring-[${getDarkerShade(color, 0)}]`)
  const buttonElement = document.getElementById('myColorButton');

  if (buttonElement) {
    console.log('Class changed:', buttonElement.className);
  };

},[color])





  const handleClick = () => {
    setColor(getRandomHexColor());
  }
    return (
        <div >
          <button id='myColorButton' className={`hover:bg-slate-300 w-5/6 h-32 p-4 m-3 rounded-xl transition duration-300 ring-2 ring-inset  active:scale-110 ease-in-out`}
          style={style}
          onClick={handleClick}
          >
            Click Me!
          </button>
        </div>
      );
    }

export default ColorButton;