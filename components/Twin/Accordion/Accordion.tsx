import { useState } from "react";
import {
  StyledAccordionWrapper,
  StyledAccordionHeading,
  StyledAccordionContent,
} from "./Accordion.styled";

export interface IAccordionProps {
  /**
   * Heading title
   */
  title: string;
  /**
   * Content to display
   */
  content: React.ReactNode;
  /**
   * Checks if the accordion should be disabled
   */
  disabled?: boolean;
}
export const AccordionTailwind = ({
  title,
  content,
  disabled,
}: IAccordionProps) => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = () => !disabled && setIsActive(!isActive);
  const accordionWrapperStyles = `px-xxSmall flex flex-col
    ${
      isActive
        ? "first:mb-medium [&:not(:first-child)]:my-medium"
        : "first:mb-zero [&:not(:first-child)]:m-zero"
    }`;
  const accordionHeadingStyles = `flex flex-row justify-between cursor-pointer bg-n-30 p-large ${
    disabled && "bg-pr-180 cursor-not-allowed"
  }`;
  // const accordionContentStyles =
  //   "p-medium border-solid border-n-white border border-t-0";
  return (
    <div className={accordionWrapperStyles}>
      <div className={accordionHeadingStyles} onClick={onClickHandler}>
        <h3>{title}</h3>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div
          className="border border-t-0 border-solid border-n-white p-medium"
          aria-expanded={!!isActive}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export const AccordionTwin = ({
  title,
  content,
  disabled,
}: IAccordionProps) => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = () => !disabled && setIsActive(!isActive);
  return (
    <StyledAccordionWrapper disabled={disabled} isActive={isActive}>
      <StyledAccordionHeading
        disabled={disabled}
        isActive={isActive}
        onClick={onClickHandler}
      >
        <h3>{title}</h3>
        <div>{isActive ? "-" : "+"}</div>
      </StyledAccordionHeading>
      {isActive && (
        <StyledAccordionContent aria-expanded={!!isActive}>
          {content}
        </StyledAccordionContent>
      )}
    </StyledAccordionWrapper>
  );
};

export default AccordionTailwind;
