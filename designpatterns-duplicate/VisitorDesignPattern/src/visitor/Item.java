package visitor;

public interface Item {
    public double accept(ShoppingCartVisitor visitor);
}
