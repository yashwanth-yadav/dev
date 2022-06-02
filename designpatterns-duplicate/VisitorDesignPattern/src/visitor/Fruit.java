package visitor;

public class Fruit implements Item{
    public String name;
    public int weight;
    public double pricePerKg;

    public Fruit(String name, int weight, double pricePerKg) {
        super();
        this.name = name;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public double getPricePerKg() {
        return pricePerKg;
    }

    public void setPricePerKg(double pricePerKg) {
        this.pricePerKg = pricePerKg;
    }

    @Override
    public double accept(ShoppingCartVisitor visitor) {
        return visitor.visit(this);
    }
}
