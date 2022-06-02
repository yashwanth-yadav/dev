package sdp;
import java.util.*;

public class ScrabbleBoard {
    private static ScrabbleBoard scrb=null;
    String[] scrabbleLetters = {"a", "a", "a", "b", "b", "c", "c", "d", "d",
            "d", "d", "e", "e", "e", "e", "e", "x", "y", "y", "z", "w", "w",
            "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h",
            "h", "i", "i", "i", "i", "i", "i", "i", "i", "i", "j", "k", "l",
            "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", "o", "o",
            "r", "r", "s", "s", "s", "s", "t", "t", "t", "t", "t", "t", "u",
            "u", "u", "u", "v", "v", };
    private LinkedList<String> letterList = new LinkedList<String> (Arrays.asList(scrabbleLetters));
    static boolean firstThread = true;
    public static synchronized ScrabbleBoard getInstance(){
        if (scrb == null){
            if(firstThread){
                firstThread = false;
                try {
                    Thread.currentThread();
                    Thread.sleep(1000);
                }
                catch (InterruptedException e) {
                    System.out.println(e);
                }

            }
            synchronized(ScrabbleBoard.class){
                if(scrb == null) {
                    scrb = new ScrabbleBoard();
                    Collections.shuffle(scrb.letterList);
                }
                }

        }
        return scrb;
    }
    public LinkedList<String> getLetterList(){
        return scrb.letterList;
    }
    public LinkedList<String> getTiles(int howManyTiles){
        LinkedList<String> tilesToSend = new LinkedList<String>();
        for(int i = 0; i <= howManyTiles; i++) {
            tilesToSend.add(scrb.letterList.remove(0));
        }
        return tilesToSend;
    }
}


