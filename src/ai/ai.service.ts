import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AiService {
  async chat(message: string) {
    try {
      const key = process.env.GROQ_API_KEY;

      if (!key) {
        throw new Error('GROQ_API_KEY is missing');
      }

      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: 'llama-3.1-8b-instant',
          messages: [
            {
              role: 'system',
              content:
                'You are a safari assistant for Udawalawe National Park. Give short, helpful answers.',
            },
            {
              role: 'user',
              content: message,
            },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${key}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return {
        reply: response.data.choices[0].message.content,
      };
    } catch (error: any) {
      console.log('AI ERROR:', error?.response?.data || error.message);

      return {
        reply: 'Sorry, AI service is currently unavailable.',
      };
    }
  }
}