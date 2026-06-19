function Marquee() {
  const items = [
    'Java', 'Python', 'PostgreSQL', 'MySQL', 'Linux',
    'HTML', 'CSS', 'JavaScript', 'React', 'Suporte N1·N2·N3'
  ]

  return (
    <div className="overflow-hidden border-y border-gray-800 py-4 my-20">
      <div className="flex animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-4 mx-4 text-gray-500 font-mono text-sm uppercase whitespace-nowrap">
            {item}
            <span className="text-green-500">+</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee