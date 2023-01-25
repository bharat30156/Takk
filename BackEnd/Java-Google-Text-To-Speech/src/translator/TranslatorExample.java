package translator;

import java.io.IOException;

import com.darkprograms.speech.translator.GoogleTranslate;

public class TranslatorExample {
	
	public static void main(String[] args) {
		
		try {
			//English to IGBO
			//System.out.println(GoogleTranslate.translate("ig", "how are you"));
			
			//English to GREEK
			//System.out.println(GoogleTranslate.translate("hi", "how are you"));
			
			//English to HAUSA
			//System.out.println(GoogleTranslate.translate("ha", "how are you"));
			
			//English to Yoruba
			//System.out.println(GoogleTranslate.translate("yo", "how are you"));
			
			//English to french
			System.out.println(GoogleTranslate.translate("fr", "My Name is Bharat"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
/**
 * Supported Languages
'af' : 'Afrikaans'
'sq' : 'Albanian'
'ar' : 'Arabic'
'hy' : 'Armenian'
'bn' : 'Bengali'
'ca' : 'Catalan'
'zh' : 'Chinese'
'zh-cn' : 'Chinese (Mandarin/China)'
'zh-tw' : 'Chinese (Mandarin/Taiwan)'
'zh-yue' : 'Chinese (Cantonese)'
'hr' : 'Croatian'
'cs' : 'Czech'
'da' : 'Danish'
'nl' : 'Dutch'
'en' : 'English'
'en-au' : 'English (Australia)'
'en-uk' : 'English (United Kingdom)'
'en-us' : 'English (United States)'
'eo' : 'Esperanto'
'fi' : 'Finnish'
'fr' : 'French'
'de' : 'German'
'el' : 'Greek'
'hi' : 'Hindi'
'hu' : 'Hungarian'
'is' : 'Icelandic'
'id' : 'Indonesian'
'it' : 'Italian'
'ja' : 'Japanese'
'km' : 'Khmer (Cambodian)'
'ko' : 'Korean'
'la' : 'Latin'
'lv' : 'Latvian'
'mk' : 'Macedonian'
'no' : 'Norwegian'
'pl' : 'Polish'
'pt' : 'Portuguese'
'ro' : 'Romanian'
'ru' : 'Russian'
'sr' : 'Serbian'
'si' : 'Sinhala'
'sk' : 'Slovak'
'es' : 'Spanish'
'es-es' : 'Spanish (Spain)'
'es-us' : 'Spanish (United States)'
'sw' : 'Swahili'
'sv' : 'Swedish'
'ta' : 'Tamil'
'th' : 'Thai'
'tr' : 'Turkish'
'uk' : 'Ukrainian'
'vi' : 'Vietnamese'
'cy' : 'Welsh'
*/
		
	}
	
}
