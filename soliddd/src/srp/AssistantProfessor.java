package srp;

public class AssistantProfessor extends Teacher {
    private int salary=0;
    public AssistantProfessor(String name, int empid, int age, int salary) {
        super(name, empid, age);
        this.salary=salary;
    }

    public int getSalary() {
        return salary;
    }
}
