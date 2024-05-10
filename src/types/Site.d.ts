type Nav = Link[]

interface Link {
  label: string
  url: string
}

interface Feature {
  icon: string
  title: string
  description: string
}

export { Nav, Link, Feature }