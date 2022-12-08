import { Collapse } from 'antd';
const { Panel } = Collapse;
const FAQ = () => {
    const text = `
    Havelock Island AKA Swaraj Dweep is a part of the Andaman and Nicobar Union territory of India. Officially, it is part of South Andaman administrative district. It is located towards the East and about 70 km away from Port Blair.
`;
    const text2 = `
    The only way to get to Havelock (for tourists) is by sea. You can travel by private AC ferries (Makruzz, Green ocean, etc) which take about 1.5 – 2 hours OR by Government ferries which can take up to 3 hours.
`;
    const text3 = `
    We suggest you keep a minimum of 3 days for Havelock. This is ideal to enjoy Radhanagar beach, Scuba dive, explore cafes and try offbeat activities like Night kayaking and trekking.
`;
    const text4 = `
    1.5 hours
`;
    const text5 = `
    Diglipur only be accessed through Port Blair. There’s no provision to access Diglipur from Neil or Havelock. However, an alternate travel entry point can be drawn from Neil and Havelock via Rangat. Some private boat rides are available from Neil and Havelock to Rangat and you can enter Diglipur from there. However, this route is quite tricky and not supported by tourism so you are at the mercy of your service providers. So, be careful of you attempting such a thing.
`;
    const text6 = `
    There you go the most bustling region of Andaman – Diglipur which will soon be a worthwhile travel destination in Andaman as plans of a second Andaman airport in Diglipur finalizes. So, think of all the exciting experiences you can try in this offbeat Andaman tourist destination.
`;
    return (
        <div className=" text-gray-700 my-5 p-8  text-base font-normal bg-white rounded-md">
        <Collapse accordion>
            
    <Panel className='text-gray-800 font-semibold' header="Where is Havelock island situated?" key="1">
      <p>{text}</p>
    </Panel>
    
    <Panel className='text-gray-800 font-semibold' header="How do you get to Havelock island?" key="2">
      <p>{text2}</p>
    </Panel>
    <Panel className='text-gray-800 font-semibold' header="How many days do you need for Havelock?" key="3">
      <p>{text3}</p>
    </Panel>
    <Panel className='text-gray-800 font-semibold' header="How much time does it take to travel from Port Blair to Havelock?" key="4">
      <p>{text4}</p>
    </Panel>
    <Panel className='text-gray-800 font-semibold' header="Can I Travel To Diglipur from Neil/Havelock?" key="5">
      <p>{text5}</p>
      <br />
      <p>{text6}</p>
    </Panel>
  </Collapse>
      
        
       
    </div>
    );
};

export default FAQ;