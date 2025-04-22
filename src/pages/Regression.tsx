
import { useState } from "react";
import { EnvironmentSelector } from "@/components/EnvironmentSelector";
import { ApplicationSelector } from "@/components/ApplicationSelector";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ResponseDisplay } from "@/components/ResponseDisplay";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface TestCase {
  id: string;
  name: string;
  testData: string;
  checked: boolean;
}

const ITEMS_PER_PAGE = 15;

const Regression = () => {
  const [environment, setEnvironment] = useState("");
  const [application, setApplication] = useState("");
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [testResponse, setTestResponse] = useState("");
  const [runningTests, setRunningTests] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFetchTestCases = () => {
    if (!environment || !application) return;
    
    setIsLoading(true);
    
    // Mock API call to fetch test cases
    setTimeout(() => {
      // Generate 50 test cases for demonstration
      const mockTestCases: TestCase[] = Array.from({ length: 50 }, (_, index) => ({
        id: (index + 1).toString(),
        name: `Test Case ${index + 1}`,
        testData: `testData${index + 1}=value${index + 1}`,
        checked: false
      }));
      
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

  const handleSelectAll = (checked: boolean) => {
    setTestCases(
      testCases.map(testCase => ({ ...testCase, checked }))
    );
  };

  const handleRunTests = () => {
    const selectedTests = testCases.filter(test => test.checked);
    console.log("Running tests:", selectedTests);
    setRunningTests(true);
    
    setTimeout(() => {
      const results = selectedTests.map(test => 
        `Test "${test.name}": Passed\nTest Data: ${test.testData}\n`
      ).join('\n');
      setTestResponse(results);
      setRunningTests(false);
    }, 2000);
  };

  // Pagination calculations
  const totalPages = Math.ceil(testCases.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTestCases = testCases.slice(startIndex, endIndex);

  const allCurrentPageSelected = currentTestCases.every(test => test.checked);

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
          disabled={!testCases.some(test => test.checked) || runningTests}
          variant="default"
        >
          {runningTests ? "Running Tests..." : "Run Selected Tests"}
        </Button>
      </div>
      
      {testCases.length > 0 ? (
        <div className="space-y-6">
          <div className="border rounded-md shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox 
                      checked={allCurrentPageSelected}
                      onCheckedChange={(checked) => handleSelectAll(checked === true)}
                    />
                  </TableHead>
                  <TableHead>Test Case</TableHead>
                  <TableHead className="w-1/2">Test Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentTestCases.map((testCase) => (
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

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}

          {(testResponse || runningTests) && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-3">Test Results</h2>
              <ResponseDisplay response={testResponse} isLoading={runningTests} />
            </div>
          )}
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

