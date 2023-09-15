import { motion } from 'framer-motion'

interface PageProps {
  children?: JSX.Element
  currentPage?: undefined | number
  pageNumber?: undefined | number
  side?: 'left' | 'right'
}

const Page = ({
  children,
  currentPage = undefined,
  pageNumber = undefined,
  side = 'right',
}: PageProps) => {
  const totalPages = 7
  const variants = {
    left: {
      rotateX: [0, 0, 0],
      rotateY: 0,
      skewY: [0, 5, 0],
      transitionStart: {
        zIndex: 10,
      },
      zIndex: [totalPages - pageNumber + 1, 10],
      transitionEnd: {
        zIndex: totalPages - pageNumber + 1,
      },
    },
    right: {
      rotateX: [0, 0, 0],
      rotateY: 180,
      skewY: [0, 5, 0],
      zIndex: [pageNumber + 1, 10],
      transitionStart: {
        zIndex: 10,
      },
      transitionEnd: {
        zIndex: pageNumber + 1,
      },
    },
  }

  return (
    <motion.div
      animate={currentPage <= pageNumber ? 'left' : 'right'}
      variants={variants}
      transition={{ duration: 2 }}
      style={{
        zIndex:
          currentPage <= pageNumber ? totalPages - pageNumber : pageNumber,
      }}
      className={`page page-${currentPage} absolute left-0 top-0 page-${side} origin-top-${
        side === 'left' ? 'right' : 'left'
      } h-[687px] w-[450px] bg-cover shadow`}
    >
      {children}
    </motion.div>
  )
}

export default Page
