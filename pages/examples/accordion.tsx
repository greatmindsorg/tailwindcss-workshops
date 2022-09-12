import { AccordionTailwind, AccordionTwin } from "../../components/Twin/Accordion/Accordion";
export const accordionData = [
  {
    id: "section_1",
    title: "Section 1",
    disabled: false,
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  },
  {
    id: "section_2",
    title: "Section 2",
    disabled: false,
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    id: "section_3",
    title: "Section 3",
    disabled: true,
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
  {
    id: "section_4",
    title: "Section 4",
    disabled: false,
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
];

const AccordionExamples = () => (
  <>
    <div className="m-medium">
      <h1 className="m-xSmall">Tailwind Accordion</h1>
      <div className="w-2/3">
        {accordionData.map(({ id, title, content, disabled }) => (
          <AccordionTailwind
            key={`${id}-tailwind`}
            title={title}
            content={content}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
    <div className="m-medium">
      <h1 className="m-xSmall">Twin Accordion</h1>
      <div className="w-2/3">
        {accordionData.map(({ id, title, content, disabled }) => (
          <AccordionTwin
            key={`${id}-twin`}
            title={title}
            content={content}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  </>
);

export default AccordionExamples;
