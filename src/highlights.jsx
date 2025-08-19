import { useEffect, useRef } from "react";

// Mock rough-notation for demonstration
const mockAnnotate = (element, config) => ({
  show: () => {
    // Simple highlighting effect using CSS
    const { type, color, strokeWidth, padding } = config;
    
    if (type === "highlight") {
      element.style.backgroundColor = color;
      element.style.padding = `${padding}px`;
    } else if (type === "underline") {
      element.style.borderBottom = `${strokeWidth}px solid ${color}`;
      element.style.paddingBottom = `${padding}px`;
    } else if (type === "box") {
      element.style.border = `${strokeWidth}px solid ${color}`;
      element.style.padding = `${padding}px`;
    } else if (type === "circle") {
      element.style.border = `${strokeWidth}px solid ${color}`;
      element.style.borderRadius = "50%";
      element.style.padding = `${padding * 2}px`;
      element.style.display = "inline-block";
    } else if (type === "strike-through" || type === "crossed-off") {
      element.style.textDecoration = "line-through";
      element.style.textDecorationColor = color;
      element.style.textDecorationThickness = `${strokeWidth}px`;
    } else if (type === "bracket") {
      element.style.position = "relative";
      element.style.padding = `0 ${padding * 3}px`;
      element.style.setProperty("--bracket-color", color);
      element.style.setProperty("--bracket-width", `${strokeWidth}px`);
      element.classList.add("bracket-annotation");
    }
    
    // Add animation class
    element.style.transition = `all ${config.animationDuration || 600}ms ease-in-out`;
  },
  remove: () => {
    // Reset styles
    element.style.backgroundColor = "";
    element.style.border = "";
    element.style.borderBottom = "";
    element.style.textDecoration = "";
    element.style.padding = "";
    element.style.borderRadius = "";
    element.style.display = "";
    element.style.position = "";
    element.style.transition = "";
    element.classList.remove("bracket-annotation");
  }
});

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc", // Default pink color
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const annotation = mockAnnotate(element, {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      });

      annotation.show();

      // Store the current element in closure for cleanup
      return () => {
        if (element) {
          mockAnnotate(element, { type: action }).remove();
        }
      };
    }
  }, [
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <>
      <style jsx>{`
        .bracket-annotation::before,
        .bracket-annotation::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: var(--bracket-width, 2px);
          background-color: var(--bracket-color, #000);
        }
        .bracket-annotation::before {
          left: 0;
          border-left: var(--bracket-width, 2px) solid var(--bracket-color, #000);
          border-top: var(--bracket-width, 2px) solid var(--bracket-color, #000);
          border-bottom: var(--bracket-width, 2px) solid var(--bracket-color, #000);
          width: 8px;
        }
        .bracket-annotation::after {
          right: 0;
          border-right: var(--bracket-width, 2px) solid var(--bracket-color, #000);
          border-top: var(--bracket-width, 2px) solid var(--bracket-color, #000);
          border-bottom: var(--bracket-width, 2px) solid var(--bracket-color, #000);
          width: 8px;
        }
      `}</style>
      <span ref={elementRef} className="relative inline-block bg-transparent">
        {children}
      </span>
    </>
  );
}

// Demo component to show usage
export default function HighlighterDemo() {
  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Text Highlighter Demo</h1>
      
      <div className="space-y-4">
        <p className="text-lg">
          <Highlighter action="highlight" color="#ffeb3b">
            This text is highlighted
          </Highlighter>
          {" "}in bright yellow.
        </p>
        
        <p className="text-lg">
          <Highlighter action="underline" color="#2196f3" strokeWidth={2}>
            This text has a blue underline
          </Highlighter>
          {" "}with custom styling.
        </p>
        
        <p className="text-lg">
          <Highlighter action="box" color="#f44336" strokeWidth={2} padding={4}>
            This text is boxed
          </Highlighter>
          {" "}with a red border.
        </p>
        
        <p className="text-lg">
          <Highlighter action="circle" color="#9c27b0" strokeWidth={2} padding={3}>
            Circled
          </Highlighter>
          {" "}text with purple border.
        </p>
        
        <p className="text-lg">
          <Highlighter action="strike-through" color="#795548" strokeWidth={2}>
            This text is struck through
          </Highlighter>
          {" "}with a brown line.
        </p>
        
        <p className="text-lg">
          <Highlighter action="bracket" color="#607d8b" strokeWidth={2} padding={4}>
            This text has brackets
          </Highlighter>
          {" "}around it.
        </p>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Available Actions:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>highlight - Background color highlight</li>
          <li>underline - Bottom border underline</li>
          <li>box - Complete border around text</li>
          <li>circle - Circular border (works best with short text)</li>
          <li>strike-through / crossed-off - Line through text</li>
          <li>bracket - Bracket-style borders on left and right</li>
        </ul>
      </div>
    </div>
  );
}