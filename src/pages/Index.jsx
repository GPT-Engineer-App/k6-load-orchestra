import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Cats</h1>
        
        <div className="mb-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="A cute cat" 
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Feline Facts</CardTitle>
            <CardDescription>Interesting tidbits about our furry friends</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cats have been domesticated for over 4,000 years.</li>
              <li>An adult cat has 30 teeth.</li>
              <li>Cats can jump up to six times their length.</li>
              <li>A group of cats is called a "clowder".</li>
              <li>Cats spend 70% of their lives sleeping.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
            <CardDescription>Some well-known feline varieties</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              <li>Siamese</li>
              <li>Persian</li>
              <li>Maine Coon</li>
              <li>Bengal</li>
              <li>British Shorthair</li>
              <li>Sphynx</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
