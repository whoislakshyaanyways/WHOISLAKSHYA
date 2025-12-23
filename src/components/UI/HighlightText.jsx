"use client"
import { useEffect, useRef } from "react"
import { useInView } from "motion/react"
import { annotate } from "rough-notation"

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}) {
  const elementRef = useRef(null)
  const annotationRef = useRef(null)

  const isInView = useInView(elementRef, { once: true, margin: "-10%" })
  const shouldShow = !isView || isInView

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!shouldShow) return

    const element = elementRef.current
    if (!element) return

    const annotation = annotate(element, {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    })

    annotationRef.current = annotation
    annotation.show()

    let timeout
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        annotation.hide()
        annotation.show()
      }, 150)
    })

    resizeObserver.observe(element)
    resizeObserver.observe(document.body)

    return () => {
      clearTimeout(timeout)
      annotationRef.current?.remove()
      resizeObserver.disconnect()
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  )
}
