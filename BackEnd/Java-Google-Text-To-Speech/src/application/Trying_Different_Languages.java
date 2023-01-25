package application;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;


import com.darkprograms.speech.translator.GoogleTranslate;
import com.darkprograms.speech.synthesiser.SynthesiserV2;

import javazoom.jl.decoder.JavaLayerException;
import javazoom.jl.player.advanced.AdvancedPlayer;

/**
 * 
 * @author Bharat
 *
 */
public class Trying_Different_Languages {
	
	//Create a Synthesizer instance
	SynthesiserV2 synthesizer = new SynthesiserV2("AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw");
	
	/**
	 * Constructor
	 * @throws IOException 
	 */
	public Trying_Different_Languages() throws IOException {
		
		/**
		 * For Reading The Text File 
		 */
//		File file = new File("E:\\Audio.txt");
//		
//		BufferedReader br = new BufferedReader(new FileReader(file));
//		
//		String say;
//		 while ((say = br.readLine()) != null) 
//			 speak(say);
		
		 
		
		/**
		 * Simple Console Based Speaking text
		 */
		String jenny = GoogleTranslate.translate("hi", "My name is Bharat");
		 speak(jenny);
		//Let's speak in English
		//speak("Hello everyone, I am Jennifer");
		
		//Speak in chinese
		//speak("我可以说你想要的任何语言！");
		
		//Let's Speak in Somalian       
		//speak("Waxaan ku hadli karaa luqad aad rabto!");
		
		//Let's Speak in Hindi
		//speak("मैं चाहता हूं कि कोई भी भाषा बोल सकता हूँ!");
		
		//Let's Speak in Polish
		//speak("Mogę mówić dowolnym językiem, którego chcesz!");
		
		//Let's Speak in Persian       ----- This doens't work for some reason i have to figure out ... ;(
		//speak("من می توانم به هر زبان که می خواهید صحبت کنید!");
		
	}
	
	/**
	 * Calls the MaryTTS to say the given text
	 * 
	 * @param text
	 */
	public void speak(String text) {
		System.out.println(text);
		
		//Create a new Thread because JLayer is running on the current Thread and will make the application to lag
		Thread thread = new Thread(() -> {
			try {
				
				//Create a JLayer instance
				AdvancedPlayer player = new AdvancedPlayer(synthesizer.getMP3Data(text));
				player.play();
				
				System.out.println("Successfully got back synthesizer data");
				
			} catch (IOException | JavaLayerException e) {
				
				e.printStackTrace(); //Print the exception
				
			}
		});
		
		//We don't want the application to terminate before this Thread terminates
		thread.setDaemon(false);
		
		//Start the Thread
		thread.start();
		
	}
	
	public static void main(String[] args) throws IOException {
		new Trying_Different_Languages();
	}
	
}
