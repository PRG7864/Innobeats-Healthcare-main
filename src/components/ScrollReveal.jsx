import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  as: Component = "div",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -60px 0px", // Animates slightly before entering full viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const style = {
    animationDelay: `${delay}ms`,
    animationDuration: `${duration}s`,
  };

  return (
    <Component
      ref={ref}
      className={`${className} ${isVisible ? `reveal-active reveal-${animation}` : "reveal-hidden"}`}
      style={style}
    >
      {children}
    </Component>
  );
}
