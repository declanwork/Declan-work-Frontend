const navigation = [
    { name: 'Top Skills', href: '#', current: true},
    { name: 'Trending Skills', href: '#', current: false},
    { name: 'Top skills in US', href: '#', current: false},
    { name: 'Project Catalog', href: '#', current: false},
  ]

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  
  export default function Skills() {
    return (
      <div className="sm:py-8 bg-[#ADFFC8]">
        <div className="mx-auto max-w-7xl px-2 lg:px-2">
          <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            {navigation.map((item) => (
                <a
                key={item.name}
                href={item.href}
                className={classNames(
                    item.current ? 'text-[#001E00]' : 'text-[#51B37F]',
                    'rounded-md py-1 text-3xl font-semibold'
                )}
                aria-current={item.current ? 'page' : undefined}
                >
                {item.name}
                </a>
            ))}
            </div>
            <div className="text-[#001E00] font-medium">
                <h5>Generative AI Specialist</h5>
                <h5>Data Entry Specialist</h5>
                <h5>Video Editors</h5>
                <h5>Data Analyst</h5>
                <h5>Shopify Developer</h5>
                <h5>Ruby on Rails Developer</h5>
                <h5>Andriod Developer</h5>
                <h5>Bookkeeper</h5>
                <h5>Content Writer</h5>
                <h5>Data Scientist</h5>
                <h5>Front-End Developer</h5>
                <h5>Game Developer</h5>
                <h5>Graphic Designer</h5>
                <h5>iOS Developer</h5>
                <h5>Java Developer</h5>
            </div>
            <div className="text-[#001E00] font-medium">
                <h5>Javascript Developer</h5>
                <h5>Logo Designer</h5>
                <h5>Mobile App Developer</h5>
                <h5>PHP Developer</h5>
                <h5>Python Developer</h5>
                <h5>Resume Writer</h5>
                <h5>SEO Expert</h5>
                <h5>Social Media Manager</h5>
                <h5>Software Developer</h5>
                <h5>Software Engineer</h5>
                <h5>Technical Writer</h5>
                <h5>UI Designer</h5>
                <h5>UX Designer</h5>
                <h5>Virtual Assistant</h5>
                <h5>Web Designer</h5>
                <h5>Wordpress Developer</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
  