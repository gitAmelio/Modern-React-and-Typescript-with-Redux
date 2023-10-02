import Accordion, { AccordionItems } from "../componenets/Accordion";

const items: AccordionItems = [
  {
    id: '2342',
    label: 'Can I use React on a project',
    content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
  },
  {
    id: '5463',
    label: 'Can I use Javascript on a project',
    content: 'You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want.'
  },
  {
    id: '8484',
    label: 'Can I use CSS on a project',
    content: 'You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want. '
  },
]

const AccordionPage = () => {
  return (
    
      <Accordion items={items} className="with" />
  )
}

export default AccordionPage;