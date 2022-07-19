import React from 'react';
import { ReactNode, useState, useRef, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react'
import styles from './Dropdown.module.scss'
import FadeIn from '../util/FadeIn'

export type dropdownT = {
  closeDropdown: Function
}

type AlignmentT = 'left' | 'right'
type DropdownProps = {
  cta: ReactNode,
  content: ReactNode,
  classProp?: string,
  alignment?: AlignmentT
}

const Dropdown = forwardRef(({ cta, content, classProp = '', alignment }: DropdownProps, ref) => {

  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  /**
   * Exposed Component API
   */
  useImperativeHandle(ref, () => {
    return {
      closeDropdown: closeDropdown,
      openDropdown: openDropdown,
      toggleDropdown: toggleDropdown
    }
  })

  const closeDropdown = () => {
    setIsOpen(false)
  }

  const openDropdown = () => {
    setIsOpen(true)
  }

  const toggleDropdown = () => {
    setIsOpen((state) => !state)
  }

  /**
   * Setup Click Listener
   */
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      // If dropdown open and target not in component, close dropdown.
      if (isOpen && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [isOpen])

  const handleOpen = useCallback(() => {
    setIsVisible((state) => !state)
    setIsOpen((state) => !state)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen((state) => !state)
  }, [])

  const handleOnComplete = useCallback(() => {
    if (!isOpen) setIsVisible(false)
  }, [isOpen])


  return (
    <div ref={containerRef} className={`${classProp} ${styles.dropdown_wrapper}`}>
      {/* CTA */}
      <div onClick={isVisible ? handleClose : handleOpen}>
        {cta}
      </div>

      {/* Dropdown Custom Content */}
      <FadeIn isVisible={isOpen} onComplete={handleOnComplete}>
        {isVisible && (
          <div className={`${styles.content_wrapper} ${alignment === 'right' ? 'u-right-absolute' : 'u-left-absolute'}`}>
            {content}
          </div>
        )}
      </FadeIn>
    </div>
  )
})

Dropdown.displayName = 'Dropdown'
export default Dropdown