import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const RecentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput expensesPeriod="Last 7 days" expenses={RecentExpenses} fallbackText="No expenses registered for the last 7 days." />
  );
}

export default RecentExpenses;
