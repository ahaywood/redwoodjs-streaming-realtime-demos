import { motion } from 'framer-motion'

interface DrawerProps {
  children: JSX.Element
  theme?: 'vividYellow' | 'caribbeanGreen'
}

const Drawer = ({ children, theme = 'caribbeanGreen' }: DrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const slideInOut = () => {
    setIsDrawerOpen((prevValue) => !prevValue)
  }

  return (
    <div>
      <motion.div
        className={`fixed inset-y-0 left-0 z-drawer h-screen min-w-[250px] bg-${theme} px-4 py-5 font-mono text-sm`}
        initial={{ x: '-97%' }}
        animate={isDrawerOpen ? { x: 0 } : { x: '-97%' }}
        transition={{ duration: 0.2 }}
        exit={{ x: '-97%' }}
      >
        <button
          className={`absolute -right-[50px] top-[100px] rounded-[20px] bg-${theme} py-5 pl-10 pr-4 text-3xl`}
          onClick={slideInOut}
        >
          🤓
        </button>
        {children}
      </motion.div>
    </div>
  )
}

export default Drawer
