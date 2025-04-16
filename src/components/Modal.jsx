import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

function Modal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        // catch any click outside the panel
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            {/* backdrop: no onClick here, just visual, sits under the panel */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
            />

            {/* modal panel: stops propagation so clicks inside don't bubble up */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Close modal"
                >
                  <IoClose size={24} />
                </button>
              </div>
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
