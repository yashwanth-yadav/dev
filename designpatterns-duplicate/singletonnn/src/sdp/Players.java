package sdp;

import java.util.LinkedList;

public class Players implements Runnable{

    @Override
    public void run() {
        ScrabbleBoard player=ScrabbleBoard.getInstance();
        System.out.println("player Instance ID: " + System.identityHashCode(player));
        System.out.println(player.getLetterList());
        LinkedList<String> playerTiles = player.getTiles(7);
        System.out.println("Player : " + playerTiles);
        System.out.println(player.getLetterList());
        System.out.println("got tiles");
    }
}
