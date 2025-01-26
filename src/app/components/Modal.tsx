'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
}

const MODAL_SIZES = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'md',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      // Speichere das aktive Element vor dem Öffnen des Modals
      previousActiveElement.current = document.activeElement as HTMLElement
      // Verhindere Scrolling des Hintergrunds
      document.body.style.overflow = 'hidden'
    } else {
      // Stelle Scrolling wieder her
      document.body.style.overflow = 'unset'
      // Fokus zurück auf vorheriges Element setzen
      previousActiveElement.current?.focus()
    }

    // Event-Listener für Escape-Taste
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Fokus-Management innerhalb des Modals
  const handleTabKey = (event: KeyboardEvent) => {
    if (!modalRef.current || !isOpen) return

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement

    if (event.key === 'Tab') {
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }
  }

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className={`fixed left-1/2 top-1/2 z-50 w-full ${MODAL_SIZES[maxWidth]} p-4`}
            initial={{ opacity: 0, y: -20, x: '-50%', translateY: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onKeyDown={handleTabKey}
          >
            <div className="relative bg-[#1a1a1a] rounded-lg shadow-xl border border-border overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 id="modal-title" className="text-lg font-medium">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-1 text-muted hover:text-foreground transition-colors"
                  aria-label="Schließen"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-4">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  // Portal für bessere Accessibility und Z-Index-Handling
  return typeof window !== 'undefined'
    ? createPortal(modalContent, document.body)
    : null
}

// Beispielverwendung:
/*
const Example = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Modal öffnen</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Beispiel Modal"
        maxWidth="md"
      >
        <p>Modal Inhalt hier...</p>
      </Modal>
    </>
  )
}
*/
