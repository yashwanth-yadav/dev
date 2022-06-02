package visitor;

public class Test {
    public static void main(String[] args) {
        Item items[] =  new Item[] {
                new Book("Wings of fire", "8989898", 1450.0),
                new Book("Harry potter gof", "8980998", 1100.0),
                new Fruit("Mango", 2, 90.0),
                new Fruit("Apple", 3, 200.0)
        };
        double totalCost = calculateTotalCost(items);

        //Display total cost
        System.out.println("Total Cost ::"+totalCost);

    }

    private static double calculateTotalCost(Item[] items) {
        ShoppingCartVisitor shoppingCartVisitor = new ShoppingCartVisitorImpl();
        double totalCost = 0.0;
        for (Item item : items) {
            totalCost += item.accept(shoppingCartVisitor);
        }
        return totalCost;
    }


}