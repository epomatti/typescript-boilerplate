import * as dotenv from 'dotenv';
import { Calculator } from './sample/calculator';

void async function main() {
  try {
    dotenv.config();
    await new Calculator().sum(2, 2);
  } catch (e) {
    // Deal with exception
    console.error(e);
  }
}()