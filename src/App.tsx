import { motion } from "motion/react"

const cards = [
  {
    link: "https://design-inspirations-olive.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    heading: "Components Library",
    description:
      "An awesome collection of beautiful and reusable UI components for modern web apps."
  },
  {
    link: "https://landing-pages-eight-sigma.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    heading: "Landing Pages",
    description:
      "A curated showcase of modern, responsive, and visually engaging landing page designs."
  },
  {
    link: "https://ui-dashboards.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    heading: "Dashboards",
    description:
      "Clean and data-focused dashboard UI inspirations built for analytics and admin panels."
  }
]

const App = () => {
  return (
      <div className="min-h-screen w-full p-8 bg-neutral-100">
        <h1 className="text-center text-4xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-fuchsia-400 text-shadow-sm">Welcome to my Design Library</h1>

        <div className="flex max-sm:flex-col items-center justify-center gap-10 mt-16 flex-wrap">
          {cards.map((card,idx)=>(
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
                ease: "easeInOut",
              }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={card.link}
                target="_blank"
                className="block h-80 w-100 rounded-lg overflow-hidden border-2 border-zinc-300 shadow-sm bg-white will-change-transform"
              >
                <img
                  className="h-2/3 w-full object-cover"
                  src={card.image}
                  alt={card.heading}
                />

                <div className="p-2">
                  <p className="text-lg font-semibold mb-2">{card.heading}</p>
                  <p className="text-sm">{card.description}</p>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
  )
}

export default App
