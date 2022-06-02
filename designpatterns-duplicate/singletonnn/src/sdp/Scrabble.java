package sdp;


import java.util.LinkedList;

public class Scrabble {
    public static void main(String[] args) {
        ScrabbleBoard player1 = ScrabbleBoard.getInstance();
        System.out.println("player1 Instance ID: " + System.identityHashCode(player1));
        System.out.println(player1.getLetterList());
        LinkedList<String> playerOneTiles = player1.getTiles(7);
        System.out.println("Player 1 tiles: " + playerOneTiles);
        System.out.println(player1.getLetterList());

        ScrabbleBoard player2= ScrabbleBoard.getInstance();
        System.out.println("player2 Instance ID: " + System.identityHashCode(player2));
        System.out.println(player2.getLetterList());
        LinkedList<String> playerTwoTiles = player2.getTiles(7);
        System.out.println("Player 2 tiles: " + playerTwoTiles);
        System.out.println(player2.getLetterList());

        //
        Runnable player01 = new Players();
        Runnable player02 = new Players();
        new Thread(player01).start();
        new Thread(player02).start();
    }
}
