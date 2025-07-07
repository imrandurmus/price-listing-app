package id.renart.model;

import java.util.Map;

public class Product {
    private String name;
    private double popularityScore;
    private double weight;
    private Map<String, String> images;

    private double price;
    private double popularityOutOf5;



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPopularityScore() {
        return popularityScore;
    }

    public void setPopularityScore(double popularityScore) {
        this.popularityScore = popularityScore;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public Map<String, String> getImages() {
        return images;
    }

    public void setImages(Map<String, String> images) {
        this.images = images;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getPopularityOutOf5() {
        return popularityOutOf5;
    }

    public void setPopularityOutOf5(double popularityOutOf5) {
        this.popularityOutOf5 = popularityOutOf5;
    }
}

