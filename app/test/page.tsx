import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function Home() {
  return (
    <div 
    >
      {/* <h1>Hello World</h1>
      <div className="blue-gradient h-40 w-40 flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold">Hello World</h1>
      </div>
      <Button>Click me</Button> */}
      <Card >
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a description of the card.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the content of the card.</p>
        </CardContent>
        <CardFooter>
          <Button>View More</Button>
        </CardFooter>
      </Card>
    </div>
  );

}
