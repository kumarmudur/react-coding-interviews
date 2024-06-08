

import Tabs from './tabs';

const RandomComponent = () => <h1>Some random content</h1>

const TabsTest = () => {
    const tabs = [
        {
          label: "Tab 1",
          content: <div>This is content for Tab 1</div>,
        },
        {
          label: "Tab 2",
          content: <div>This is content for Tab 2</div>,
        },
        {
          label: "Tab 3",
          content: <RandomComponent />,
        },
      ];

    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex);
    }
    
    return (
        <div>
            <Tabs tabsContent={tabs} onChange={handleChange} />
        </div>
    );
};

export default TabsTest;