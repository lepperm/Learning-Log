---
layout: journal
title: "Digging In With 30 Days of Machine Learning"
excerpt: With some Python under my belt, we next start getting into the actual machine learning portion of Kaggle's 30 Days of ML course, and top it off with a final competition.
author: Max Lepper
categories: [journal]
tags: [python, "machine learning"]
date: 2021-08-30 23:04:41 -0400
modified_date:
published: true
status: live
confidence: log
importance: 1
context: true
comments: true
skills: [python]
references: ["https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html","https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.iloc.html?highlight=iloc#pandas.DataFrame.iloc","https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.round.html?highlight=dataframe%20round#pandas.DataFrame.round","https://docs.python.org/3/library/datetime.html","https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html","https://scikit-learn.org/stable/modules/cross_validation.html"]
timespent: 1860
sleep: 0
recreation: 0
workout: 0
---

* TOC
{: toc}

## Journal

{% include focus-box.html focus="Study" theme="Python, Machine Learning" %}

### Day 8

This week, we're getting into decision tree modeling, which the course explains is the basic building block for many advanced data science models.

We start out with some terms:

- The model => A method of predicting unknown outcomes
- Fitting or training the model => Capturing patterns from data
- Training Data => The data used to fit the model

Using an example of predicting real estate prices, here's an example decision tree featuring a second layer of deeper trees, terminating at individual predictions:

{% include mermaid-init.html %}
<div class="mermaid">
graph TD
    A[Does the house have more than two bedrooms?] -->|No| B[Lot size larger than 8500 square feet?]
    A[Does the house have more than two bedrooms?] -->|Yes| C[Lot size larger than 11500 square feet?]
    B --> |No|D[Predicted price: \n$146000]
    B --> |Yes|E[Predicted price: $188000]
    C --> |No|F[Predicted price: $170000]
    C --> |Yes|G[Predicted price: $233000]
</div>

Based on the steps to get there, it's easy to see how important good data is!

When it comes to manipulating and exploring data, we'll be using the `pandas` library. The core tool within `pandas` is the DataFrame, which is similar to a table or database.

Right away, the `.describe()` function appears to be incredibly powerful! By default, it can be used to describe a DataFrame by 8 properties:
- Count, or the number of non-missing values
- Mean
- Std, or standard deviation
- Min, the smallest value in the set
- 25%
- 50%, the 50th percentile
- 75%
- max, the largest value in the set

With that, it threw me right into the exercise for the day! Not too bad, just load some data into a DataFrame and...fill out some answers based on the data?

```python
# What is the average lot size (rounded to nearest integer)?
avg_lot_size = ____

# As of today, how old is the newest home (current year - the date in which it was built)
newest_home = ____

# Checks your answers
step_2.check()
```

We haven't gotten to actually accessing the contents of a DataFrame yet, so, off to the docs I went!

This took some digging and experimentation to figure out, but I quickly found that you can identify specific cells in a DataFrame with either `.iloc` or [`.loc`]({{page.references[1]}}), the latter of which I ended up using for readability.

The next hurdle was getting a DataFrame-type value into an int. [Dataframe.round()]({{page.references[2]}}) took care of rounding, and then I was able to typecast the value into an int. One down!

The second value was similar, but I need to grab the current year and determine the difference in years. I could hardcode the current year, but that's boring, so I imported [`datetime`]({{page.references[3]}}) and grabbed the current year value for the calculation. Here's where things ended up:

```python
from datetime import datetime as dt

thisYear = dt.now().year

# What is the average lot size (rounded to nearest integer)?
avg_lot_size = int(home_df.loc['mean','LotArea'].round())
print(f"avg_lot_size = {avg_lot_size}")

# As of today, how old is the newest home (current year - the date in which it was built)
newest_home = int(home_df.loc['max','YearBuilt'].round())
newest_home_age = thisYear - newest_home
print(f"newest_home_age = {newest_home_age}")

# Checks your answers
step_2.check()
```

which prints out:

```python
avg_lot_size = 10517
newest_home_age = 11
```

A triumphant green **Correct** appears beneath my code block. Curious to see how close I was to the intended solution, I ran the solution field and...

```python
# using data read from home_data.describe()
avg_lot_size = 10517
newest_home_age = 11
```

...so they wanted me to just type out the answer manually? Huh... whoops, yeah I suppose that makes sense! Regardless, I learned some good information that will hopefully come in handy very soon!

The exercise ends on a reflection about how the newest house is over a decade old, and what that says about the data sample we're using. Since we're specifically looking at real estate pricing for Iowa in the USA, the minimum sell year is 2006 and the maximum is 2010, and we had a housing market crash right smack-dab in the middle!

This sort of critical reflection is a great reminder to regularly step back and look at the big picture.

### Day 9

Today is about how to pick data for modeling and then how to validate that model!

To see what variables exist within our data set, we can use the `.columns` property. For the example, we're also dropping missing values with the command `.dropna(axis=0)`, although it alludes to being able to handle this more gracefully in a future lesson.

It looks like Kaggle has a whole other course on [using the Pandas library](https://www.kaggle.com/learn/pandas) to select subsections of the data, so hopefully that will be the focus of later weeks in this series! For now, we're using two approaches:

1. Dot notation to select a "prediction target"
   - This is the variable in our data set that we want to have the model ultimately predict
   - This is conventionally saved as `y`
2. Selecting with a column list for the "features"
   - These are any other variables from our data set that we want to use as part of the model. It can be a small set or even up to every other variable in the set from our prediction.
   - This is conventionally saved as `X` (capital X)

```python
melbourne_features = ['Rooms', 'Bathroom', 'Landsize', 'Lattitude', 'Longtitude']
X = melbourne_data[melbourne_features]
```

While we've used `.describe()` to inspect the overall contents of the DataFrame, `.head()` can reveal the actual contents of the first few rows of the DataFrame. The course suggests that often, peeking at the data like this may reveal unexpected surprises.

To build an use a model successfully, we need to:
1. Define what kind of model it will be and what we will use to build it
2. Fit the model by capturing patterns from the data
3. Predict our targets
4. and evaluate how accurate the predictions are

I'll be using the scikit-learn library (or `sklearn`) for this leg of the course. It also mentions that, to make the model reproducible, we need to specify a `random_state` numeric value that is consistent. I'm not totally sure exactly what's happening here with this, but it makes me think of something akin to a seed value for a randomly generated map or scenario in games.

This exercise didn't cut me loose much, but at the end, I had a simple model that is alarmingly more straight-forward than I would have expected:

```python
from sklearn.tree import DecisionTreeRegressor

iowa_model = DecisionTreeRegressor(random_state=1)

# Fit the model
iowa_model.fit(X, y)

# Predict the first 5 results
predictions = iowa_model.predict(X.head())

# Show the predictions
print(predictions)

# Show the actual values
print(y.head())
```

Who would of thought that you would fit a model with `.fit()` and predict it with `.predict()`?

With the model in place, it's time to measure its quality to validate!

One of the issues with using our training data also as our evaluation data is that factors that exist within the training data may not reflect factors that actually affect results in normal situations. Since the data we're evaluating with DOES show similar patterns, though, we wouldn't be able to tell.

As an example, it says that maybe in our data set, houses with green doors all had high sales prices. Door color has no serious influence over sale price in reality, though, so using a different set of data to evaluate may help reveal that the model has a bias to predict higher prices for houses with green doors. If we were to only use the training data to evaluate this model, then it would match since the trend of expensive green-doored houses exists.

Given one pool of data, however, how do we get data for testing? The simple solution is to exclude some of our data set from the training model, and use one set for training and another for validation.

Scikit-learn has a function for this, too:

```python
from sklearn.model_selection import train_test_split

train_X, val_X, train_y, val_y = train_test_split(X, y, random_state = 0)
```

For validation, we're starting by using the Mean Absolute Error (or MAE), which is the absolute result of the calculation `error = actual - predicted`, averaged across the dataset. Or, similar to the test split, we can import it with `from sklearn.metrics import mean_absolute_error`.

The second exercise picks up where the first left off, with in-sample predictions for the `iowa_model`. I split the data into training and validation sets, fit and made predictions. As you would expect, the predictions were no longer a perfect match! Checking for the MAE revealed an error of about $30k across the validation set.

### Day 10

Today I'm learning about underfitting and overfitting the model.

Underfitting is when the model is shallow, and fails to capture the patterns and distinctions in the data. These models will perform poorly on the training data as well as new predictions.

Overfitting, on the other hand, is where we have so much specificity that our end nodes contain barely any data points. This produces a model that fits the training data VERY well, but typically performs much worse against new real-world data.

Neither option is particularly desireable, so we want to try and find something in between! This would ideally be the lowest MAE across the spectrum of underfitting to overfitting.

We can programatically help to pinpoint our lowest MAE with the use of the `max_leaf_nodes` parameter and pairing it with a `for` loop.

```python
model = DecisionTreeRegressor(max_leaf_nodes=max_leaf_nodes, random_state=0)
```

For the exercise, we took all of the code written so far and performed this exact operation. I came up with a 3 line solution by matching `max_leaf_nodes` values to MAE results with a dictionary, and then finding the key of the minimum value in the set with `min(best_nodes_count, key=best_nodes_count.get)`.

While this is an improvement, we're still using a Decision Tree model, which supposedly isn't very sophisticated, so now it's time to move up to a Random Forest model (same as what was used on day 1 for the Titanic model!).

A Random Forest uses many trees, instead of Decision Tree's single, and averages the results from multiple trees to generate predictions.

```python
from sklearn.ensemble import RandomForestRegressor
```

With at least our initial setup, the model used is really the only change! The exercises illustrates this process, but it's hardly anything to write home about. Tomorrow, however, looks like it's going to be interesting!

### Day 11

Machine learning competitions is the theme today, and it's starting me out with everything we've written up to this point as my base. My starting MAE for the model is 21857, and I'd like to try and improve on that, if I can.

One area that I think could make a big dent is the features used for the model. They've provided a list of features that won't throw errors, and adding all of them into the model immediate drops my MAE down to 16928 points, so I'll use that as a reference point for improvement. That being said, I feel like some features should be more important than others, and dumping all of them in feels like an overfit condition.

This section got a bit out of hand, so I'm going to strip the details. I tried a few different approaches to improving our fit, starting from manually reviewing the field descriptions and picking my "best guess" option, to testing and comparing different groups, to testing most key elements of the house.

After that, I tried creating a "control" group and testing the influence of every individual additional feature in terms of MAE, and then created a sorted list from the biggest influencer down, then incrementally added features to observe how the MAE shifted.

Through this approach, I was getting the feeling that certain feature sets might typically be found together, hence why they would show a big impact to the MAE in isolation, but much lower impact or even negative impact when added to a pool. That being said, I can't quite wrap my head around an efficient way to figure out exactly how these groupings work out.

Here's a sample of what I mean, using the "most impactful to least impactful feature" approach:

```
**Isolated Testing**
- MAE diff >8000: 'GrLivArea' (~13k), 'OverallQual', 'TotalBsmtSF'
- MAE diff 8000-7000: '1stFlrSF', 'TotRmsAbvGrd', '2ndFlrSF', 'GarageArea'
- MAE diff 7000-6000: 'GarageCars', 'Fireplaces'
- MAE diff 6000-5000: 'BsmtFinSF1'
- MAE diff 5000-4000: ---None---

**Cumulative Features**
MAE 38568 <= 'LotArea', 'YearBuilt' (control)
MAE 25626 <= +'GrLivArea'
MAE 20881 <= +'OverallQual'
MAE 19407 <= +'TotalBsmtSF'
MAE 19348 <= +'1stFlrSF'
MAE ~~19529 <= +'TotRmsAbvGrd'~~
MAE 19276 <= +'2ndFlrSF'
MAE 19046 <= +'GarageArea'
MAE 18869 <= +'GarageCars'
MAE 18307 <= +'Fireplaces'
MAE 17372 <= +'BsmtFinSF1'
MAE 17054 <= +'BedroomAbvGr'
MAE ~~17176 <= +'BsmtUnfSF'~~
MAE ~~17132 <= +'BsmtFullBath'~~
...
```

Thinking about this... being hyper-focused on reducing MAE is probably not the right thing to fixate on, and probably leads to a skewed model, or maybe one that fits this data set really well, but not real data. That being said, it does produce the best MAE value I've encountered so far at 17054.

Looking through [the docs for RandomForestRegressor]({{page.references[4]}}), I was curious which parameters I could adjust to fine-tune our results. `n_estimators`, `max_depth`, and `max_features` all sound particularly promising, so I dug in to seeing how it changed my results.

```python
rf_model = RandomForestRegressor(n_estimators=10000, max_depth=32, max_features=7, random_state=1)
```

Increasing `n_estimators` for the `RandomForestRegressor` ekes out a little additional improvement with diminishing returns at the expense of processing power and time, and `max_depth` and `max_features` greatly sway the numbers in total. After some 20-questions-esque tweaking, I arrived at the new lowest MAE, 15995.

Going to submit my model, however, I ran into an immediate snag - `NaN` values in the testing data! They must have meant only that the listed features wouldn't create errors in our local data, or something, but this was very misleading! By process of elimination, I was able to identify multiple features with `NaN` values, like 'GarageArea' and 'GarageCars'. Re-testing with this new submission-friendly feature set yielded errors that were closer to my starting point than anything else.

Later still, I found that my MAE-impacted prioritized list still manages to score well at 17290, even if it's not beating my best to-date. Exhausted from a long week and out of ideas, I resubmitted my latest attempt. My end score was 17437, which did successfully jump me up nearly 4000 places in the competition to the upper half, so I'm glad that progress was made! I'll have to revisit when I learn other strategies.

### Day 12

Today steps things up with the intermediate leg of the course! We're diving through three lessons right out the gate. While reviewing what we've learned so far, it suggests creating multiple model variations in an array and then feeding them into a scoring function to quickly evaluate which scores the best, which would have been a much faster approach to what I was doing yesterday... and a very obvious solution after the fact! 😂

We're using the same data set for housing models. The model I've produced so far performs better than where this leg starts out, so I'll be interested to see how much the tutorial improves over the base score, and consequently how much I can go back and further refine my submission from day 11.

Missing values plagued my best performing strategy on day 11, and that's one of the issues we're tackling today. Consider three approaches to missing values:

1. Drop column
2. Imputation
3. Imputation with tracking

Dropping a whole column is often times undesirable, as there may be lots of valid and helpful data! Especially if results are collected and people can opt-out of sharing answers, there are may reasons why there may be occasional gaps. Imputation is an alternative approach where we take the mean value of the other entries and assign that to our blanks.

Imputation is making a lot of assumptions, though, and may accidentally introduce error or unexpected (and unrealistic) trends into our data that our model could pick up. To potentially improve on this, we could track which values are backfilled to help counteract this error, however improvements are not a guarantee.

A good approach may be to try multiple strategies and see how the results change. There may be times where dropping is a more effective strategy, or maybe using a different approach altogether!

It sounds like there are many ways to approach imputation, but for the purpose of the tutorial, we'll be performing a mean imputation, or "simple imputation":

```python
from sklearn.impute import SimpleImputer
```

Using what we learned about arrays in python, grabbing the columns with null values is pretty straight-forward:

```python
cols_with_missing = [col for col in X_train.columns if X_train[col].isnull().any()]
```

Through the example, dropping columns performs better than imputation! Thinking about the data, this is a great example of how imputation might not be a good match for the dataset. Say a house has no garage - imputing a value for a missing garage value may mean that the true house value doesn't accurately match house values for homes that really had garages, and the model now skews further away from actual! Determining values to use to populate these NaN cells will likely be situational and largely dependent on what the data is.

The rest of the exercises followed similarly to the example, and we end up with a MAE of 17791, so getting very close to my results from the previous day with much less experimentation, which is exciting! The thing that I don't yet understand is how I would go about a mixed approach - say some values get filled in with a minimum number, and others are imputed with a mean value, and maybe one extreme outlier is dropped, or something like that.

Next up is categorical variables, or non-numeric data. Again, we have a few different suggestions for how we can handle this data:

1. Drop variables
2. Ordinal encoding
3. One-hot encoding

Similar to missing values, just dropping the column is an option if the information contained isn't particularly useful.

Ordinal encoding assumes a linear order to categories, such as in a frequency answer like "Never" (0) < "Rarely" (1) < "Most days" (2) < "Every day" (3).

```python
from sklearn.preprocessing import OrdinalEncoder
```

One-hot encoding takes the unique values within itself and creates a new column for each value, flagging either 0 or 1 in the value-specific column. Categorical variables without an intrinsic ranking are referred to as nominal variables. One-hot encoding works better for smaller sets of options, and the example suggests no more than 15 unique values.

```python
from sklearn.preprocessing import OneHotEncoder

# Apply one-hot encoder to each column with categorical data
OH_encoder = OneHotEncoder(handle_unknown='ignore', sparse=False)
```

In our declaration above, we pass two parameters:

- `handle_unknown='ignore'` => When the validation data contains classes that aren't in the training data, ignore errors
- `sparse=False` => Return columns as a numpy array instead of a sparse matrix

While working on exercises, it finally clicked how to apply different approaches to the sample data, and it seems so obvious now - I've already been doing it! When we're fitting and transforming data, we're often applying it back to our `X_train` and `X_valid` samples, and _specifically to a subset of columns_.

At some point, I must have gotten mixed up, and I'm having a difficult time relating my current understanding to what I believed before. I think perhaps I thought I was manipulating the whole set in some fashion...but anyway I was wrong.

Here's the exercise that made it click. Out of all object columns, given dropped invalid columns and a set of good columns, we apply ordinal encoding to just the good columns:

```python
from sklearn.preprocessing import OrdinalEncoder

# Categorical columns in the training data
object_cols = [col for col in X_train.columns if X_train[col].dtype == "object"]

# Columns that can be safely ordinal encoded
good_label_cols = [col for col in object_cols if set(X_valid[col]).issubset(set(X_train[col]))]

# Problematic columns that will be dropped from the dataset
bad_label_cols = list(set(object_cols)-set(good_label_cols))

# Drop categorical columns that will not be encoded
label_X_train = X_train.drop(bad_label_cols, axis=1)
label_X_valid = X_valid.drop(bad_label_cols, axis=1)

# Apply ordinal encoder
ordenc = OrdinalEncoder()
label_X_train[good_label_cols] = ordenc.fit_transform(label_X_train[good_label_cols])
label_X_valid[good_label_cols] = ordenc.transform(label_X_valid[good_label_cols])
```

The next example dropped this tasty snippet for counting the number of unique values in each categories. I don't totally understand what's going on with `lambda` right now, but I'd definitely like to revisit:

```python
# Get number of unique entries in each column with categorical data
object_nunique = list(map(lambda col: X_train[col].nunique(), object_cols))
d = dict(zip(object_cols, object_nunique))

# Print number of unique entries by column, in ascending order
sorted(d.items(), key=lambda x: x[1])
```

The exercise also comments that, when dealing with large data sets, it's important to consider how we're modifying the size of the table. With a table containing 10k rows, and a categorical column containing 100 unique entires, performing a one-hot transformation adds a whopping 990,000 new entries to the table, whereas ordinal encoding adds none!

This was a ton of information, and I'm admittedly starting to feel a little lost. I did have a weekend-long family commitment, right as this next segment started, so I've been away from the material for 3 nights and trying to catch back up, but this exercise was too big to realistically complete (and understand) in a single night. I hope other nights going forward are more balanced than this!

### Day 13

Today we're covering pipelines, which are a way to keep code more organized and deploy at scale. There are three steps to creating a pipeline:

1. Define the preprocessing steps
   1. Or, how do we want to deal with different types of data?
2. Define the model
   1. Or, what type of model do we want to use and how should it be configured?
3. Create and evaluate the pipeline
   1. Or, bundle the preprocessing and model steps into a pipeline object

The explanation doesn't go into much detail about what's actually happening here, or really elaborate any further with the examples, so this is something I'll need to look into more.

Next up is cross-validation, or running our model against different subsets of training and validation data. Some terms introduced are "holdout", or the data withheld for validation, and "folds", or the number of different segments of holdout data to use 100% of our training data as part of the final model.

Cross-validation is most helpful when you have a small dataset, and the potential for inaccurate models due to random noise is high, at the expense of processing power and time. For larger models, the sample size may be big enough that the benefit of cross-validation isn't significant.

Here's where the pipelines click into place for me a bit better - we can use our pipeline to greatly simplify the cross-validation process:

```python
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.model_selection import cross_val_score

my_pipeline = Pipeline(steps=[('preprocessor', SimpleImputer()),('model', RandomForestRegressor(n_estimators=50,random_state=0))])

# Multiply by -1 since sklearn calculates *negative* MAE
scores = -1 * cross_val_score(my_pipeline, X, y, cv=5,scoring='neg_mean_absolute_error')

print("MAE scores:\n", scores)
print("Average MAE score (across experiments):")
print(scores.mean())
```

In the above example, we have all numeric categories as our sample data, so we just use the `SimpleImputer()` as the preprocessor. `cv=5` as a parameter for `cross_val_score` specifies that we want to run 5 folds.

Further information on cross-training can be found in the [scikit-learn documentation]({{page.references[5]}}).

### Day 14

I've seen XGBoost, or gradient boosting, mentioned a few times in passing, and it looks like today is the day I learn what it's all about. The description given describes the process as iteratively adding models to reduce loss.

```python
from xgboost import XGBRegressor
```

XGBoost has some key parameters to affect accuracy and speed:

- `n_estimators`, or how many times to go through the modeling cycle
- `early_stopping_rounds`, how how many rounds of model deterioration to allow before stopping the cycle iterations, helping to find the optimal number of rounds
- `learning_rate`, or how much each added tree to the ensemble helps us. Using a small learning rate and a high number of estimators coupled with early stopping typically yields good results at the expense of time.
- `n_jobs`, or the number of parallel processes to use when calculating large models, typically 1 per processor core

Put it all together and we get:

```python
my_model = XGBRegressor(n_estimators=1000, learning_rate=0.05, n_jobs=4)
my_model.fit(X_train, y_train, early_stopping_rounds=5, eval_set=[(X_valid, y_valid)], verbose=False)
```

Right away, I understand the hype! This process seems to extract a lot of guesswork from tinkering with model parameters, as like with the random forest approach.

The closing lesson is on data leakage, in which the training data contains important information regarding the target that may not be available when used for prediction.

**Test leakage** is when there is data in the sample set that either directly relates to the target value, or happens out of chronological sequence in real-life predictions when compared to our training data. For example, predicting if someone has gotten sick while using data that shows they've taken medication. Typically, any variable updated or created after the target value is realized should be excluded.

**Test-train contamination** is when validation data is included in fitting or preprocessing, causing high validation scores but poor performance when using it to make decisions. This can be avoided by taking lengths to isolate your validation data.

It seems like these sources of error will take practice and critical thinking about how the data is collected and to be used. Some elements may require additional details from whoever compiled the data in the first place to clarify.

After a few hypothetical examples, this third leg of the 30 days of ML wrapped up into another certificate.

### Day 15

This is it, I'm on my own! The rest of the 30 days is a battle royale of trying to iteratively build a better model in a closed competition among "30 Days of ML" participants.

The starter workbook sets us up with a start-to-finish model using a random forest model, with a final mean squared error of 0.73753, and a much longer processing time than every workbook so far at about 10 minutes.

The final score after submission comes out to 0.73845, so my goal between now and the end of the competition is to take what I've learned and improve on that error as best as possible and submit my attempt to the competition. The best scores at the top of the leaderboard right now come out ot 0.71720, so it helps to be coming into things with a realistic idea of how much room there is for improvement.

### Final Submission

In the end, I went with an iteratively tuned XGBoost and ordinal encoder for categorical values, along with adjustments to the order that everything executes and how preprocessing is handled, trying to minimize contamination.

My final submitted score was 0.72192, so nearly an 80% score improvement between my starting score and the top of the leaderboard! It doesn't put me terribly high in the competition ranking itself (just a little over 50%), but I am pleased with the improvements I was able to make.

The data is interesting in that there really isn't anything human-readable in the data itself - numerical values are between 0 and 1, and categorical values are single letters. Peeking into other submissions, it looks like there are a vast array of libraries, optimization approaches, and visualization tools to get far more sophisticated results than what I've built with my learning this past month.

### In Summary

1. Pull in our data
   ```python
   import pandas as pd
   X_full = pd.read_csv('../input/train.csv', index_col='Id')
   X_test_full = pd.read_csv('../input/test.csv', index_col='Id')
   ```
2. Determine what value we are trying to predict
   `we'll use "Price"`
3. Drop rows with missing target data
   ```python
   X_full.dropna(axis=0, subset=['Price'], inplace=True)
   ```
4. Set our prediction values to y and the rest of our data (with the target dropped) to X
   ```python
   y = X_full.Price
   X_full.drop(['Price'], axis=1, inplace=True)
   ```
5. Split our data between training and validation sets
   ```python
   from sklearn.model_selection import train_test_split
   X_train_full, X_valid_full, y_train, y_valid = train_test_split(X_full, y, train_size=0.8, test_size=0.2, random_state=0)
   ```
6. Determine the types of columns we care about, and then create a reduced copy for both X training and X validation values
   ```python
   categorical_cols = [cname for cname in X_train_full.columns if X_train_full[cname].nunique() < 10 and X_train_full[cname].dtype == "object"]

   numerical_cols = [cname for cname in X_train_full.columns if X_train_full[cname].dtype in ['int64', 'float64']]

   my_cols = categorical_cols + numerical_cols
   X_train = X_train_full[my_cols].copy()
   X_valid = X_valid_full[my_cols].copy()
   X_test = X_test_full[my_cols].copy()
   ```
7. Optionally, peek into the `.head()` to see what our data looks like
8. Preprocess the data
9. Build a model
10. Fit the data to the model using training data (X_train and y_train)
11. Get predictions using the fit model with the validation data (X_valid)
12. Test the predictions against the validation answers (y_valid) and determine the MAE
13. Generate predictions for the test data (X_test)
14. Save predictions to a CSV file
   ```python
   output = pd.DataFrame({'Id': X_test.index, 'Price': preds_test})
   output.to_csv('submission.csv', index=False)
   ```
15. Submit to the competition

### Time Breakdown

Here's a breakdown of my time over this past week:

- 8/9
  - 2h
- 8/10
  - 2h
- 8/11
  - 1.5h
- 8/12
  - 3.5h
- 8/13
  - 0h (family commitment, and wrapping Cretan Maze challenge)
- 8/14
  - 0h (family commitment, and wrapping Cretan Maze challenge)
- 8/15
  - 0h (family commitment)
- 8/16
  - 2h
- 8/17
  - 3h
- 8/18
  - 2.5h
- 8/19
  - 0h (out of town)
- 8/20
  - 0h (out of town)
- 8/21
  - 0h (out of town)
- 8/22
  - 0h (out of town)
- 8/23
  - 1h
- 8/24
  - 4h
- 8/25
  - 2.5h (Silver is Gold)
- 8/26
  - 1h (Silver is Gold)
- 8/27
  - 0h
- 8/28
  - 0h
- 8/29
  - 3h
- 8/30
  - 3h


## Extra Bits

### Silver is Gold

Our first users have started to sign up on Silver is Gold, and with it, UX and technical issues have reared their heads. Limited free time meant that working on the ML competition was, unfortunately, the only thing that I could cut to switch my attention, but was met with good response by the growing team!

### Cretan Maze

I caught some inspiration and worked on the [Cretan Maze](https://coding-challanges.herokuapp.com/), which is an API puzzle. This was an awesome experience to help make me more comfortable with making API calls, and I managed to make my way onto all three levels of the leaderboard!

Here's the time I spent working on it, mostly with just JavaScript and CSS. This time will be omitted from this post and probably appended to a future write-up.

- 8/11
  - 5h
- 8/12
  - 4h
- 8/13
  - 4h
- 8/14
  - 6.5h

## Gratitude

### What is going well?

Do you ever get the feeling that you're on the verge of something that will change your life in ways that you can't yet quite predict? Like you're alllllmost there but your brain isn't sparking the critical connection just yet? That's what this month has progressively felt like for me.

I've been reading about psychology, philosophy, needs, goals, motivations, learning, and biases trying to understand how the systems I've been using to help organize my life are underperforming, and it all begins with my thinking while building them. While, yes, I might be able to get stuff done and push towards goals, there is also a LOT of guilt and quiet failure in there, and that has a price that gets paid in many different ways.

From this blog alone, I'm sure there are quite a few examples of me implementing process and optimization prematurely, and that's one of the habits I want to work to break with a new system. Before you call me a hypocrite, I am using the word "system" loosely to mean more of a rough framework to collect my thoughts, information, and tasks, in a way that I know it will be safe, and that I will come back to it.

There is a lot more reading and thinking ahead of me, but I'm so excited to see where it takes me. Honestly if I have the bandwidth for it, I may prioritize it over web dev learning because of how much of a benefit I anticipate it could provide - if not in terms of productivity or clarity of thought, then at the very least in comfort and kindness to myself.

My spouse secretly arranged for us to get away for a bit, too, and celebrate our relationship. It was an absolute whirlwind, but it captured so much of what I treasure about our bond - we stay kind and cheerful, work well as a team, roll with whatever happens, and find the fun anywhere we can. 😊

### What could be better?

I'm thinking that I could remove this section, which seems like an invite for negativity - not very appropriate for a "gratitude" section, is it?

Honestly, there will always be things that could be better. For example, one of my biggest stressors right now is that I'm struggling to assert myself at work so that my own projects won't fail as I'm being loaded up to support many other engineers, and I can't get critical information from specific individuals. There's not much value produced by venting in this fashion, however, and I have faith in myself that I will continue following up and try my best to deliver the most accurate product that I can.

Additionally, as part of my new process, I have logs and affirmations that I'm trying to perform daily, and it may make sense to keep that kind fo content to my own notes. My view of what Learning Log needs to be has shifted, certainly, but I think determining what comes next for this site will be an ongoing consideration. 

## Tasklist

- [x] Complete my 30 Days of ML coursework
- [x] Make my best-effort submission to the ML course competition
