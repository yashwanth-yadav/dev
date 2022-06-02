package visitor;

public class Book implements Item{
    public String name;
    public String isbnNumber;
    public double price;

    public Book(String name, String isbnNumber, double price) {
        super();
        this.name = name;
        this.isbnNumber = isbnNumber;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIsbnNumber() {
        return isbnNumber;
    }

    public void setIsbnNumber(String isbnNumber) {
        this.isbnNumber = isbnNumber;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public double accept(ShoppingCartVisitor shoppingCartVisitor) {
        return shoppingCartVisitor.visit(this);
    }
}
