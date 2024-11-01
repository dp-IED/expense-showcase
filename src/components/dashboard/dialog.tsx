"use client";

// Add these imports at the top
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

// Inside your component, add these state variables
const [isDialogOpen, setIsDialogOpen] = useState(false);
const [selectedExpense, setSelectedExpense] = useState<any>(null);
const [editedExpense, setEditedExpense] = useState<any>({});
const [selectedFile, setSelectedFile] = useState<string>("");

// Add these handler functions
const handleResolveClick = (expense: any) => {
  setSelectedExpense(expense);
  setEditedExpense({
    description: expense.name,
    amount: expense.amount.replace("£", ""),
  });
  setIsDialogOpen(true);
};

const handleResolveConfirm = () => {
  const updatedExpenses = unreconciled.filter(
    (expense) => expense.id !== selectedExpense.id
  );
  setUnreconciled(updatedExpenses);
  setIsDialogOpen(false);
  setSelectedFile("");
};

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    setSelectedFile(file.name);
  }
};

export default function DialogExample() {
  // Add the dialog component just before the closing div of your component
  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Resolve Expense</DialogTitle>
            <DialogDescription>
              Match this expense with an invoice and update details if needed.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                value={editedExpense.description || ""}
                onChange={(e) =>
                  setEditedExpense({
                    ...editedExpense,
                    description: e.target.value,
                  })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <div className="col-span-3 relative">
                <span className="absolute left-3 top-2">£</span>
                <Input
                  id="amount"
                  type="number"
                  value={editedExpense.amount || ""}
                  onChange={(e) =>
                    setEditedExpense({
                      ...editedExpense,
                      amount: e.target.value,
                    })
                  }
                  className="pl-6"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="invoice" className="text-right">
                Invoice
              </Label>
              <div className="col-span-3">
                <Input
                  id="invoice"
                  type="file"
                  onChange={handleFileChange}
                  className="col-span-3"
                  accept=".pdf,.jpg,.png,.xlsx"
                />
                {selectedFile && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Selected: {selectedFile}
                  </p>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleResolveConfirm} disabled={!selectedFile}>
              Confirm Match
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      // Update the Button in the table cell to use handleResolveClick
      <Button
        variant="secondary"
        className="bg-violet-50 text-violet-700 hover:bg-violet-100"
        onClick={() => handleResolveClick(expense)}
      >
        Resolve Expense
      </Button>
    </>
  );
}
