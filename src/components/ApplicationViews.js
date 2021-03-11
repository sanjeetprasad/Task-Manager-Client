import React from "react"
import { Route } from "react-router-dom"
import { CategoryProvider } from "./categories/categoryProvider";
import { CategoryList } from "./categories/categoryList";
import { CategoryForm } from "./categories/categoryForm";
import { TagProvider } from "./tags/TagProvider";
import {TagList} from "./tags/TagList"
import {TagForm} from "./tags/TagForm"

export const ApplicationViews = (props) => (
     <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
        </main>

        <CategoryProvider>
            <Route
                exact
                path="/categories"
                render={(props) => <CategoryList {...props} />}
                />
            <Route
                exact
                path="/categories/create"
                render={(props) => <CategoryForm {...props} />}
                />
            <Route
                exact
                path="/categories/edit/:categoryId(\d+)"
                render={(props) => <CategoryForm {...props} />}
                />
      </CategoryProvider>

      <TagProvider>
        <Route exact path="/tags" render={(props) => <TagList {...props} />} />
        <Route
          exact
          path="/tags/create"
          render={(props) => <TagForm {...props} />}
        />
        <Route
          path="/tags/edit/:tagId(\d+)"
          render={(props) => <TagForm {...props} />}
        />
      </TagProvider>

    </>
)
