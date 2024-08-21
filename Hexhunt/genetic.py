import requests
import random
import string
import time

# Define the API endpoint and user ID
API_URL = "https://hexhunt.hackmit.org/solve_hex_hunt"
USER_ID = "YTG2G3_4bda8b54"

# Function to score string using the actual API
def score_string(s):
    try:
        response = requests.post(API_URL, json={"letters": s, "userId": USER_ID})
        response_data = response.json()
        return response_data.get("total", 0), response.text
    except requests.exceptions.RequestException as e:
        print(f"Error scoring string: {e}")
        return 0, ""

# Generate a random string of length 19 using capital letters
def generate_random_string():
    return ''.join(random.choices(string.ascii_uppercase, k=19))

# Generate initial population
def generate_population(size):
    return [generate_random_string() for _ in range(size)]

# Evaluate the population
def evaluate_population(population):
    return [(s, *score_string(s)) for s in population]

# Select the best performers
def select_best(population_scores, num_best):
    sorted_population = sorted(population_scores, key=lambda x: x[1], reverse=True)
    return [s for s, score, response in sorted_population[:num_best]]

# Perform crossover between two parents
def crossover(parent1, parent2):
    crossover_point = random.randint(1, 18)
    child1 = parent1[:crossover_point] + parent2[crossover_point:]
    child2 = parent2[:crossover_point] + parent1[crossover_point:]
    return child1, child2

# Mutate a string using only capital letters
def mutate(s):
    mutation_point = random.randint(0, 18)
    mutation_char = random.choice(string.ascii_uppercase)
    return s[:mutation_point] + mutation_char + s[mutation_point + 1:]

# Create new generation
def create_new_generation(best_population, population_size):
    new_generation = best_population[:]
    while len(new_generation) < population_size:
        parent1, parent2 = random.sample(best_population, 2)
        child1, child2 = crossover(parent1, parent2)
        new_generation.extend([mutate(child1), mutate(child2)])
    return new_generation[:population_size]

# Genetic Algorithm
def genetic_algorithm(population_size, num_generations, num_best):
    max_score_ever = 0
    best_string_ever = ""
    trial = 0

    while True:
        print(f"Starting trial {trial}...")
        population = generate_population(population_size)
        for generation in range(num_generations):
            population_scores = evaluate_population(population)
            best_population = select_best(population_scores, num_best)
            population = create_new_generation(best_population, population_size)
            best_string, best_score, best_response = max(population_scores, key=lambda x: x[1])
            print(f"Trial {trial}, Generation {generation}: Best Score = {best_score}, Best String = {best_string}")
            if generation == 10 and best_score < 1000:
                print("Skipping to next trial")
                break
            print(f"Raw Response: {best_response}")
            time.sleep(1)  # Avoid hitting the API rate limit

            if best_score > max_score_ever:
                max_score_ever = best_score
                best_string_ever = best_string

        print(f"End of trial {trial}: Best String Ever = {best_string_ever}, Max Score Ever = {max_score_ever}")
        trial += 1

# Parameters
population_size = 100
num_generations = 50
num_best = 20

# Run the genetic algorithm
genetic_algorithm(population_size, num_generations, num_best)
