import { ButtonOrDropdownButton, insertJsx$, type JsxComponentDescriptor, usePublisher } from "@mdxeditor/editor";
import MDX_COMPONENTS from "./definitions"; 
import { ALL_MDX_INSERTS } from "./Inserts";


const SelectComponent = () => {

    const insertJsx = usePublisher(insertJsx$);

    const options = MDX_COMPONENTS
        .filter((component): component is JsxComponentDescriptor => component.name !== null) 
        .map(component => ({
            label: component.name!, // Now TypeScript knows name is not null
            value: component.name!
        }));

    const handleChange = (currentVal: string) => {
        //Use the value to look up the option and then depending on that insert the correct jsx. The value === name of the component. The name of the component should also match in the 
        if(currentVal){
            const selectedComponent = ALL_MDX_INSERTS[currentVal];

            if(selectedComponent){
                insertJsx(selectedComponent)
            }
        }
    }

    return (    
        <ButtonOrDropdownButton title="Components" onChoose={handleChange} items={options}>Components</ButtonOrDropdownButton>
    )
}

export default SelectComponent;