import { Button } from "@/components/ui/button";

const ButtonsPage =() =>{
    return(
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
           <Button>Default</Button>
           <Button variant="primary">Primary</Button>
           <Button variant="primaryOutline">Primary Outline</Button>
           <Button variant="secondary">Primary</Button>
           <Button variant="secondaryOutline">Primary Outline</Button>
           <Button variant="danger">DANGER</Button>
           <Button variant="dangerOutline">DANGER Outline</Button>
           <Button variant="super">super</Button>
           <Button variant="superOutline">super Outline</Button>
           <Button variant="ghost">GHOST</Button>
       </div>
    );
};

export default ButtonsPage;