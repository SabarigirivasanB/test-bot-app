
import { useState } from "react";
import { EnvironmentSelector } from "@/components/EnvironmentSelector";
import { ApplicationSelector } from "@/components/ApplicationSelector";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TestCase {
  id: string;
  name: string;
  testData: string;
  checked: boolean;
}

const Regression = () => {
  const [environment, setEnvironment] = useState("");
  const [application, setApplication] = useState("");
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchTestCases = () => {
    if (!environment || !application) return;
    
    setIsLoading(true);
    
    // Mock API call to fetch test cases
    setTimeout(() => {
      const mockTestCases: TestCase[] = [
        { id: "1", name: "Login Test", testData: "username=test, password=test123", checked: false },
        { id: "2", name: "Navigation Test", testData: "startPage=home, endPage=products", checked: false },
        { id: "3", name: "Checkout Test", testData: "items=3, paymentMethod=credit", checked: false },
        { id: "4", name: "Search Test", testData: "keyword=product, filters=price,category", checked: false },
        { id: "5", name: "Profile Update Test", testData: "name=John, email=john@example.com", checked: false },
      ];
      
      setTestCases(mockTestCases);
      setIsLoading(false);
    }, 1000);
  };

  const updateTestData = (id: string, newData: string) => {
    setTestCases(
      testCases.map(testCase => 
        testCase.id === id ? { ...testCase, testData: newData } : testCase
      )
    );
  };

  const toggleTestCase = (id: string, checked: boolean) => {
    setTestCases(
      testCases.map(testCase => 
        testCase.id === id ? { ...testCase, checked } : testCase
      )
    );
  };

  const handleRunTests = () => {
    const selectedTests = testCases.filter(test => test.checked);
    console.log("Running tests:", selectedTests);
    // TODO: Implement actual test execution
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Regression Testing</h1>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <EnvironmentSelector value={environment} onChange={setEnvironment} />
        <ApplicationSelector value={application} onChange={setApplication} />
      </div>
      
      <div className="flex justify-end mb-4">
        <Button 
          onClick={handleFetchTestCases} 
          disabled={!environment || !application || isLoading}
          className="mr-2"
        >
          {isLoading ? "Loading..." : "Fetch Test Cases"}
        </Button>
        
        <Button 
          onClick={handleRunTests}
          disabled={!testCases.some(test => test.checked)}
          variant="default"
        >
          Run Selected Tests
        </Button>
      </div>
      
      {testCases.length > 0 ? (
        <div className="border rounded-md shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Select</TableHead>
                <TableHead>Test Case</TableHead>
                <TableHead className="w-1/2">Test Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testCases.map((testCase) => (
                <TableRow key={testCase.id}>
                  <TableCell>
                    <Checkbox 
                      checked={testCase.checked} 
                      onCheckedChange={(checked) => toggleTestCase(testCase.id, checked === true)}
                    />
                  </TableCell>
                  <TableCell>{testCase.name}</TableCell>
                  <TableCell>
                    <Input 
                      value={testCase.testData}
                      onChange={(e) => updateTestData(testCase.id, e.target.value)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center p-8 border rounded-md bg-gray-50">
          {isLoading ? (
            <p>Loading test cases...</p>
          ) : (
            <p>Select an environment and application, then fetch test cases.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Regression;
